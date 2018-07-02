const bcrypt = require('bcryptjs')
var session_id_count = 1;

module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');
        
        db.show_events()
        .then( events => res.status(200).send( events ) )
        .catch( () => res.status(500).send('error') );
    },

    detail: (req, res) => {
        const db = req.app.get('db');

        db.event_details([req.params.id])
        .then( events => res.status(200).send( events ) )
        .catch( () => res.status(500).send('error') );
    },

    registerUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.check_email([email]).then(user => {
            //console.log(user)
            if (user.length !== 0) {
                res.status(200).send('Email Taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.create_user([email, hash]).then((user) => {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.id = user[0].id
                    req.session.user.email = user[0].email
                    console.log('Registered: ', req.session)
                    res.status(200).send(user)
                })
            }
        })
    },

    loginUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.check_email([email]).then(user => {
            if (user.length !== 0) {
                const validPassword = bcrypt.compareSync(password, user[0].password)
                if (validPassword) {
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.id = user[0].id
                    req.session.user.email = user[0].email
                    res.status(200).send(user)
                    //console.log(req.session.user)
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('Email does not exist')
            }
        })
    },

    ticket: (req, res) => {
        const db = req.app.get('db');
        const {eventid, id, quantity} = req.body.cartTicket;
        console.log(req.body, id)

        db.get_ticket([eventid, id, quantity])
        .then( cart => res.status(200).send( cart ) )
        .catch( (err) => { 
            console.log(err)
            res.status(500).send('error') });
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {userid, eventid} = req.params;

        console.log(req.session)

        db.delete_ticket([req.session.user.id, req.params.id])
        .then( cart => res.status(200).send( cart ) )
        .catch( (err) => {
            console.log(err)
            res.status(500).send('error')} );
    },

    view: (req, res) => {
        
        const db = req.app.get('db');
        db.view_cart([req.session.user.id])
        .then( cart => res.status(200).send( cart ) )
        .catch( () => res.status(500).send('error') );

    },

    quant: (req, res) => {
        const {quantity, eventid} = req.body
        //const {id} = req.params;
         
        const db = req.app.get('db');
        console.log('console log:', req.params, req.body)
        
        
        db.update_quantity([quantity, req.session.user.id, eventid])
        .then( cart => {
            console.log( cart )
            res.status(200).send( cart )})
        .catch( (err) => { 
            console.log(err)
            res.status(500).send('error') });
    },
    "stripe": (req, res, next) => {
        //convert amount to pennies
        console.log(req)
        console.log(req.session)

        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
            if (amountArray[i] === ".") {
                if (typeof amountArray[i + 1] === "string") {
                    pennies.push(amountArray[i + 1]);
                } else {
                    pennies.push("0");
                }
                if (typeof amountArray[i + 2] === "string") {
                    pennies.push(amountArray[i + 2]);
                } else {
                    pennies.push("0");
                }
                break;
            } else {
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));

        const charge = stripe.charges.create({
            amount: convertedAmt, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test charge from react app'
        }, function (err, charge) {
            if (err) return res.sendStatus(500)
            console.log(req.params)
            const db = req.app.get('db');
            
            db.cart_clear([req.session.user.id])
                .then(cart => res.status(200).send(cart))
            });
        }
        
    }
            
            

           