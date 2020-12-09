
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users');
//1 argument means we are fetching from mongoose - we loaded schema in on the User model
//User is model class - we can crease model isntances from it 

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log('access token', accessToken);
            // console.log('refreshToken', refreshToken);
            // console.log('profile', profile);
            User.findOne({ googleId: profile.id })
                .then((existingUser)=>{
                    if (existingUser) {
                        //we already have a record with given ID
                    } else {
                        //we don't have a user record with this ID, so we can make new record
                        new User({ googleId: profile.id }).save();
                        //id coming from google user's profile
                    }
                })
        }
    )
);


//new GoogleStrategy() creates a new instance of the passport strategy
//passport.use asks passport to be aware that they can use Google Strategy to authenticate
//GoogleStrategy is known as a string called google when passport loads it up - this is what is called below in authentication route

