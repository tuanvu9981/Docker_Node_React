const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const URI = require('../backend/env').URI;
const mainRoutes = require('./server/routes/mainRoutes')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const googleClientID = require('../backend/env').googleClientID;
const googleClientSecret = require('../backend/env').googleClientSecret;

var corsOptions = {
    origin: "http://localhost:3000"
}

// ALL URL CAN ACCESS
// app.use(cors());

const port = 8000;

// Set up dependencies for express, logger, cors
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Set up passport for Google Account;
passport.use(new GoogleStrategy(
    {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    accessToken => {
        console.log(accessToken);
    }
));

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected !");
    })
    .catch((error) => {
        console.log(error);
    });

//set up route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MERN Project'
    });
});

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.use('/api/', mainRoutes);

app.listen(port, () => {
    console.log(`Running at port: ${port}`);
})
