//prod
//need to go back to prod/dev videos and add these to heroku

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    gogoleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
}