const express = require("express");
const mongoose = require("mongoose");
const app = express();
//Configure the environment variables with .env
require("dotenv").config();
const port = process.env.PORT||4444;
const dbURI = process.env.URI;

//Connect to mongoDB
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));

//********************************************************************** */

mongoose.set("useFindAndModify", false);
app.use(express.json());

//********************************************************************** */

const userRoute = require("./Routes/user");
app.use("/api/user", userRoute);

app.get("*", function (req, res) {
  res.send("<h1>Checkpoint REST API</h1><hr><p>In this checkpoint, you will be performing a series of guided instructions to create a REST API by manipulating your database with mongoose.</p>");
});

app.listen(port, function () {
  console.log("The server is running at port: " + port);
});
