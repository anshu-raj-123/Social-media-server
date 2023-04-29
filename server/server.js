const dotenv = require('dotenv');
const config = require('./../config/config');
const app = require('./express');
const mongoose = require('mongoose'); 


app.listen(config.port, (err) => {
  if (err) {
    console.log(err); 
  }
  console.info('Server started on port %s.', config.port);
});

mongoose 
  .connect(config.mongoUri)
  .then(() => {
    console.log('Connection is Successfull ..........');
  })
  .catch((err) => {
    console.log('No connection', err);
  });
