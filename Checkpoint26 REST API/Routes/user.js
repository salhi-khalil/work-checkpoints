const express = require("express");
const userRoute = express.Router();
//Import our model
const User = require("../Models/User");

userRoute.get("/", (req, res) => {
  res.send("<h1>Welcome to the user Route! :D </h1><hr>");
});
//GET :  RETURN ALL USERS
userRoute.get("/all", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//POST :  ADD A NEW USER TO THE DATABASE
userRoute.post("/newuser", (req, res) => {
  const newuser = new User(req.body);
  newuser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//PUT : EDIT A USER BY ID
userRoute.put("/update/:id", function (req, res) {
  const personID = req.params.id;
  const update = req.body;
  User.findByIdAndUpdate(personID, update, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//DELETE : REMOVE A USER BY ID
userRoute.delete("/remove/:id", function (req, res) {
  const removedUserID = req.params.id;
  User.findByIdAndRemove(removedUserID)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
module.exports = userRoute;
