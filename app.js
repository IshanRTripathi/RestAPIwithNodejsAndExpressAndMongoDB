const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');
require('dotenv/config')


const PORT = 3000;

//Import routes
const postsRoute= require('./routes/posts');
const getsRoute= require('./routes/gets');

//Middleware - everytime a /posts endpoint is hit, it will route the request accordingly
// to routes mentioned in posts.js
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute); 
app.use('/gets', getsRoute);

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION_URI,
    { useNewUrlParser: true },// was asked to add this from the deprecation warning log
    () => { //callback function 
        console.log("Connected to MongoDB with admin credentials");
    });

app.listen(PORT, () => {
    console.log("Listening at port " + PORT);
});