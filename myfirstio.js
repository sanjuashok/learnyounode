var fs = require('fs');

// get the path to the file from command line
var path =  process.argv[2];

// get buffer object from node
var buf = fs.readFileSync(path);

var fileStr = buf.toString();

var numLines = fileStr.split("\n").length - 1;
console.log(numLines);