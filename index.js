const express = require('express');
//gives us access to the express library
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User') //passport is using the model, so it MUST be defined first
require('./models/Survey')
require('./services/passport')


mongoose.connect(keys.mongoURI)

const app = express();
//typically only has one app, but can have many

app.use(bodyParser.json())

app.use(
    cookieSession({ 
        //30 days: 30 days, 24 hrs, 60 min, 60 sec, 1000 miliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] //allows multiple keys for additional security
    })
)

app.use(passport.initialize());
app.use(passport.session());
//app.use wire up middleware (small functions used to modify incoming requests to our app before they go to route handlers)
//we can wire them up once instead of at the top of every route handler 



require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app, passport);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
//look at underlying environment to see what port Heroku wants us to use, otherwise default to 5000

app.listen(PORT);
