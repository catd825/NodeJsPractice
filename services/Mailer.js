const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
//const { mail }
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    
}

module.exports = Mailer;

// When we write out this line:
// this.from_email = new helper.Email('no-reply@emaily.com');
// We instead need to use the email address of the "Sender" that we configured in the new setup notes: