const express = require('express');
//gives us access to the express library

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express();
//typically only has one app, but can have many

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



const PORT = process.env.PORT || 5000;
//look at underlying environment to see what port Heroku wants us to use, otherwise default to 5000

app.listen(PORT);




// app.get('/', (req,res) => {
//     res.send({ bye: 'buddy'});
// });
