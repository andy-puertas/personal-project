module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');
        
        db.show_events()
        .then( events => res.status(200).send( events ) )
        .catch( () => res.status(500).send('error') );
    },

    create: (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
        
      
        db.create_user([email, password])
        .then((dbRes) => {
          const { id, email } = dbRes[0];
          req.session.userid = email;
          res.status(200).send(id, email)
          .catch(() => res.status(500).send('error') ) ;
        });
    },
    
}