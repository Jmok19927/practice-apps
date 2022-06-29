const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:p4ssword@cluster0.ji0dqfy.mongodb.net/Cluster0?retryWrites=true&w=majority");

const entrySchema = new mongoose.Schema({
  term: String,
  def: String,
  // has built in _id;
})

const Entry = mongoose.model('Entry', entrySchema);


module.exports.Entry = Entry;
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
