const mongoose = require('mongoose');
const  {CONFIG} = require('./config');

mongoose.set('useCreateIndex', true);
mongoose.connect(CONFIG.DATABASE.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, (error) => {
  if (!error) {
    console.log('sucessfully connected to MongoDB');
  } else {
    console.log('error in connecting');
  }
});