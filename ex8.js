var http = require('http');

var url =  process.argv[2];

var output = "";

http.get(url, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		output = output + data;
	});
	response.on("error", function(error){
		console.log("error!");
	});
	response.on("end", function(end){
		console.log(output.length);
		console.log(output);
	});
});