const mongoose = require('mongoose');
//require mongoose library
// const Schema = mongoose.Schema
//the property name is equal to the variable name we are assigning it to.  this is equal to es 2015 destructuring, below
const { Schema } = mongoose;
//the mongoose object has a property named schema.  take taht property and assign it to new variable called schema.

//create schemas below
const userSchema = new Schema({ 
    googleId: String,
    credits: { type: Number, default: 0}
}); 

mongoose.model('users', userSchema);
//mongoose model command creates a new collection called  users.  mongoose will not overwrite if something already exists.
//this loads the schema into mongoose
//1 argument means we are trying to fetch from mongoose (see passport.js), 2 arguments mean we are loading something into it