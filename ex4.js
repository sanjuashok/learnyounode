var fs = require('fs');

// get the path to the file from command line
var path =  process.argv[2];

fs.readFile(path, 'utf8', function(err, data){
	if (err) { throw err; }

	var numLines = data.split("\n").length - 1;
	console.log(numLines);
});