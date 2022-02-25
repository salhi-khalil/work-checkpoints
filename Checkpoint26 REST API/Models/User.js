//Create a models folder and a User.js file in it 
//In User.js you must define a mongoose Schema and export the model , 
//you will use it in the server.js

let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  //interests: { type: [String] }
},{timestamps: true});
module.exports = mongoose.model("User", userSchema);
