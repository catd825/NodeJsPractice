
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('profile', profile);
        }
    )
);
//new GoogleStrategy() creates a new instance of the passport strategy
//passport.use asks passport to be aware that they can use Google Strategy to authenticate
//GoogleStrategy is known as a string called google when passport loads it up - this is what is called below in authentication route

