import mongoose from 'mongoose';

const DEV_URL =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000';

mongoose.connect(DEV_URL, {
  dbName: 'apiTest',
});

const database = () => {
  mongoose.connection.once('open', () => {
    console.log('DATABASE CONNECTED....');
  });
};

export default database;
