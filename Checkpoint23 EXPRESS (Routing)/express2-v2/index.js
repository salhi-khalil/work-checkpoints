//using pug
const express = require("express");
const app = express();
const path= require("path");
const isItOpen = require("./middleware/isItOpen");


const PORT = 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");

//middleware
app.use(isItOpen);
//Home
app.get("/", function(req,res){
    res.render("index",{weekDay:req.isItOpen[0], hours:req.isItOpen[1], isopen:req.isItOpen[2]});
    console.log("day of the week: ",req.isItOpen[0],"the hour: ",req.isItOpen[1],"Is it open?",req.isItOpen[2]);

});
//Contact Us
app.get("/contactUs", function(req,res){
    res.render("contactUs",{weekDay:req.isItOpen[0], hours:req.isItOpen[1], isopen:req.isItOpen[2]});
});
//Our Services
app.get("/ourServices", function(req,res){
    res.render("ourServices",{weekDay:req.isItOpen[0], hours:req.isItOpen[1], isopen:req.isItOpen[2]});
});


app.listen(PORT,()=>console.log(`server started// port: ${PORT}`));