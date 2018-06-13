module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');
        
        db.show_events()
        .then( events => res.status(200).send( events ) )
        .catch( () => res.status(500).send('error') );
    },

    create: (req, res) => {
        const db = req.app.get('db');
        const { username, password, email } = req.body;
        
      
        db.create_user([username, password, email])
        .then((dbRes) => {
          const { id, username, email } = dbRes[0];
          req.session.userid = username;
          res.status(200).send(id, username, email)
          .catch(() => res.status(500).send('error') ) ;
        });
      }
    
}