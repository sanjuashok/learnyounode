var mymodule = require('./ex6_module.js')

var dir =  process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, data){
	if (err) { console.log("error!"); }

	data.forEach(function(filename){
		console.log(filename);
	});
});
