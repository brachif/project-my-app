const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())


mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.oziys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
  useNewUrlParser:true,
  useUnifiedTopology: true, 
  useCreateIndex: true
});

mongoose.connection.on('connected', () =>{
  console.log("mongodb connected");
});

const userRoutes = require('./api/routes/users');


app.use(bodyParser.json())

//Route
app.use('/api/users', userRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})
module.exports = app;