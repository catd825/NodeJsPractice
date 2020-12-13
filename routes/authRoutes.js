
const passport = require('passport')


module.exports = (app) => {
    
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    //when they come to the route, they are directed into the oauth flow managed by passport.
    //scope is based on what google has access to (emails, contact list)

    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );

    app.get(
        '/api/logout', (req, res) => {
           req.logout(); //removes cookies from request object
           res.send(req.user); //tells user they are not logged in
        }
    )

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

}
