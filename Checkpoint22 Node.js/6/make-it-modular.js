var mymodule = require('./mymodule.js')
var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function (err, list) {
  if (err) console.error(err)
  list.map( el=> console.log(el))
})