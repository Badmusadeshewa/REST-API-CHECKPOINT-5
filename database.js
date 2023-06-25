let mongoose = require('mongoose');
const MONGO_URI =process.env.MONGO_URI // REPLACE WITH YOUR DB SERVER
const database = 'MongooseCheckpoint';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
// Connect to the database
 mongoose.connect(`${MONGO_URI}/${database}`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}
}


  module.exports = new Database();