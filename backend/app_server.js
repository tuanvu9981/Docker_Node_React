const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const mainRoutes = require('./server/routes/mainRoutes')

//Set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

mongoose.connect('mongodb://mongodb:27018')
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
