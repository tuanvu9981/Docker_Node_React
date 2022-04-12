const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const { URI } = require('../backend/.env');
const mainRoutes = require('./server/routes/mainRoutes')

// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import logger from 'morgan';
// import { URI } from './env'

//Set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// const whitelist = [
//     'http://localhost:3000/'
// ]

// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected !");
    })
    .catch((error) => {
        console.log("ERROR: Cannot connect DB !");
    });

const port = 8000;

//set up route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MERN Project'
    });
});

// ALL URL CAN ACCESS
app.use(cors());
app.use('/api/', mainRoutes);

app.listen(port, () => {
    console.log(`Running at port: ${port}`);
})
