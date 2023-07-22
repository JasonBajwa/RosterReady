const mongoose = require('mongoose');

//This needs to be completed beforehand in order to connect to mongdb
const mongooseAPI = "mongodb+srv://";

const connectDB = async () => {
  try {
    //Below the api key needs to be added
    await mongoose.connect('mongooseAPI', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;



