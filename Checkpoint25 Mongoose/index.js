const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4444;
//Import our model
const Person = require("./models/person");
//Array of people for model.create
const arrayOfPeople = [
  {
    name: "nadaazerty",
    age: 279,
    favoriteFoods: ["food1", "apple", "burritos"],
  },
  {
    name: "nadadelete",
    age: 2788888889,
    favoriteFoods: ["food1", "pasta", "burritos"],
  },
  { name: "Nada", age: 27, favoriteFoods: ["koskssi", "fruits"] },
  { name: "Mohamed", age: 30, favoriteFoods: ["koskssi", "Pizza", "burritos"] },
  { name: "Zeineb", age: 18, favoriteFoods: ["koskssi", "fruits"] },
  { name: "Cham", age: 2, favoriteFoods: ["koskssi", "fruits", "burritos"] },
];
//Connect to mongoDB
// user: ndns     password: nadanada     collection: list
const dbURI =
  "mongodb+srv://ndns:nadanada@checkpoint.5vfyx.mongodb.net/list?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));

//Create and Save a Record of our Model using ".save()"
app.get("/addOnePerson", (req, res) => {
  const person = new Person({
    name: "testname",
    age: 99999999,
    favoriteFoods: ["food1", "food2", "food3"],
  });
  person
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//Create Many Records with ".create()"
app.get("/addManyPeople", (req, res) => {
  Person.create(arrayOfPeople)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Display all the documents
app.get("/all", (req, res) => {
  Person.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Display the documents containing people with a specified name
app.get("/person/:name", (req, res) => {
  Person.find({ name: req.params.name })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Find just one person which has a certain food in the person's favorites, using Model.findOne()
//Use the function argument food as a search key.
app.get("/foods/:food", (req, res) => {
  const food = req.params.food;
  /*one document where "favoriteFoods" is an array that contains 
    the string with the specified food as one of its elements:*/
  Person.findOne({ favoriteFoods: food })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Find the (only!!) person having a given _id, using Model.findById()
//Use the function argument personId as the search key.
app.get("/person/id/:id", (req, res) => {
  const personId = req.params.id;
  //exemple d'id: 60cddd1001a8232a9055e711
  Person.findById({ _id: personId })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//Perform Classic Updates by Running Find, Edit, then Save
//personId2: 60cddd1001a8232a9055e711
app.get("/addfoods", function (req, res) {
  res.send("Perform Classic Updates by Running Find, Edit, then Save");
  const personId2 = "60cddd1001a8232a9055e711";
  Person.findById({ _id: personId2 })
    .then((result) => {
      result.favoriteFoods.push("hamburger");
      result.save();
      res.send(result);
    })
    .catch((err) => console.log(err));
});
//Perform New Updates on a Document Using model.findOneAndUpdate()
/*Find a person by Name and set the person's age to 20. Use the function parameter personName as a search key.

Note: You should return the updated document. 
To do that you need to pass the options document { new: true } 
as the 3rd argument to findOneAndUpdate(). 
By default, these methods return the unmodified object. */
app.get("/updates", function (req, res) {
  const personName = { name: "nadaazerty" };
  const update = { age: 20 };
  //If you use Model.findOneAndUpdate(), by default you'll see one of the below deprecation warnings.
  mongoose.set("useFindAndModify", false);
  Person.findOneAndUpdate(personName, update, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Delete One Document Using model.findByIdAndRemove
//[{"_id":"60ce4e514544661a9c8fd076","name":"nadadelete"}]
app.get("/remove", function (req, res) {
  const perId = "60ce4e514544661a9c8fd076";
  Person.findByIdAndRemove(perId)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Delete Many Documents with model.remove()
/* Don’t forget to pass it to the done() callback, since we use it in tests.*/
app.get("/remove/:name", function (req, res) {
  Person.find({ name: req.params.name })
    .remove()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Chain Search Query Helpers to Narrow Search Results:
app.get("/foods-burritos", function (req, res) {
  Person.find({ favoriteFoods: "burritos" }) // Find people who like burritos
    .limit(2) // limit to 2 items
    .sort({ name: 1 }) // sort ascending by firstName
    .select({ name: true, favoriteFoods: true }) // hide their age //select name and favoriteFood
    .exec() // execute the query
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//diiiiiiiiiiivvvvvvvvvv
app.get("*", function (req, res) {
  res.send("Hello World");
});

app.listen(port, function () {
  console.log("The server is running at port: " + port);
});
