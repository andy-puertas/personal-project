module.exports = {
    read: (req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.show_events()
        .then( events => res.status(200).send( events ) )
        .catch( () => res.status(500).send('error') );
    }
    
}