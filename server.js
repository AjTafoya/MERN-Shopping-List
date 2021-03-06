const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');



const app = express();

//body parser middleware
app.use(bodyParser.json());

//DB config 
const db = require('./config/keys.js').mongoURI;

// connect to mongo 
mongoose
.connect(db)
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//Use routes
app.use('/api/items', items);

//Run server 

const port = process.env.PORT || 5000;
//listen to port 
app.listen(port,()=> console.log(`Server started on port ${port}`));