const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const URI = require('../backend/env').URI;
const mainRoutes = require('./server/routes/mainRoutes')

var corsOptions = {
    origin: "http://localhost:3000"
}

// ALL URL CAN ACCESS
// app.use(cors());

//Set up dependencies
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected !");
    })
    .catch((error) => {
        console.log(error);
    });

const port = 8000;

//set up route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MERN Project'
    });
});

app.use('/api/', mainRoutes);

app.listen(port, () => {
    console.log(`Running at port: ${port}`);
})