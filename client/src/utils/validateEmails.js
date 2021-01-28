const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    const invalidEmails = emails
    const emailsArray = emails
    .split(',')
    .map(email => email.trim())
    // email tests the format against the regex pattern
    .filter(email => re.test(email) === false) 

    if(invalidEmails.length) {
        return `These emails are invalid ${invalidEmails}`
    }

}