const mongoose = require('mongoose');
const express = require("express");
const logger = require("morgan");
const dotenv = require('dotenv');
// dotenv.config();
// require('dotenv').config()     short hand way
// require('./routes')(app)


const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
// app.use('./routes');

// parses req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 
app.use(express.static("public"));

// connection to mongoDB through mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://garrettkrage:5Kgk4107.cu.du@ds015892.mlab.com:15892/heroku_zj43r0ww",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

// server is up and running and listening for hits.
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


