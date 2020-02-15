const mongoose = require('mongoose');
const express = require("express");
const logger = require("morgan");
const dotenv = require('dotenv')
dotenv.config()
// require('dotenv').config()     short hand way

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// parses req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 
app.use(express.static("public"));

// connection to mongoDB through mongoose
mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }).


// server is up and running and listening for hits.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


