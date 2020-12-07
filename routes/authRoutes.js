
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


}
