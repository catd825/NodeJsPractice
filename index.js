const express = require('express');
//gives us access to the express library

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express();
//typically only has one app, but can have many

passport.use(new GoogleStrategy());
//new GoogleStrategy() creates a new instance of the passport strategy
//passport.use asks passport to be aware that they can use Google Strategy to authenticate


const PORT = process.env.PORT || 5000;
//look at underlying environment to see what port Heroku wants us to use, otherwise default to 5000

app.listen(PORT);




// app.get('/', (req,res) => {
//     res.send({ bye: 'buddy'});
// });
