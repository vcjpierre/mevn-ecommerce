const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://jpvc:5250jpvc@cluster0-di3dt.mongodb.net/test?retryWrites=true&w=majority', 
{ useUnifiedTopology: true, useNewUrlParser: true  }, 
 err => {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected to the database.");
    }
});

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// GET:retrieve data from the server
app.get('/', (req, res) => {
    res.json("Hello amazon clone");
});

// POST:send data from frontend to backend
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Listening on PORT", 3000);
    }
});
