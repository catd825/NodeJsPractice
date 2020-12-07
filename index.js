const express = require('express');
//gives us access to the express library
require('./services/passport')



const app = express();
//typically only has one app, but can have many

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
//look at underlying environment to see what port Heroku wants us to use, otherwise default to 5000

app.listen(PORT);
