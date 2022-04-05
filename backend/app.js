// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const { URI } = require('.env');

// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import logger from 'morgan';
// import { URI } from './env'

//Set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

console.log(URI)
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

app.listen(port, () => {
    console.log(`Running at port: ${port}`);
})
