// $ learnyounode verify filtered-ls.js
var fs = require("fs");
var path = require("path");

//the first two values are reserved for system info by Node.
var folder = process.argv[2]; //directory name as the first argument to your program : 2
var ext = "." + process.argv[3]; //file extension to filter by as the second argument :3
//will not come prefixed with '.'

fs.readdir(folder, function (err, files) {
  files.map(el => {
    if (path.extname(el) === ext) {
      console.log(el);
    }
  });
});
