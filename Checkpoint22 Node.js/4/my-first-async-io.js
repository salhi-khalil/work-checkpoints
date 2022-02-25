/* Create a file named my-first-async-io.js.

  Write a program that uses a single asynchronous filesystem operation to       
  read a file and print the number of newlines it contains to the console       
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument. 
   $ learnyounode verify my-first-async-io.js
  */

var fs = require("fs");
var aa = process.argv[2];

fs.readFile(aa, function(err,res){
    var num = res.toString().split("\n").length - 1;
    console.log(num);
})


