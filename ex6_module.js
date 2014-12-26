var path = require('path');
var fs = require('fs');

module.exports = function (dir, ext, callback){
	var filteredFiles = [];
	var error = null;

	fs.readdir(dir, function(err, files){
		if (err) { return callback(err); }
		
		files.forEach(function (file) {
			if (path.extname(file) === "." + ext) {
				filteredFiles.push(file);
			}	
		});
		callback(error, filteredFiles);	
	});
}