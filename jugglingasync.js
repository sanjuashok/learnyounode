var http = require('http');
var url1 =  process.argv[2];
var url2 =  process.argv[3];
var url3 =  process.argv[4];

var output = ["","",""];
var numEnds = 0;
http.get(url1, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		output[0] = output[0].concat(data);
	});
	response.on("end", function(){
		numEnds = numEnds + 1;
		if (numEnds === 3) {prettyprint(output);}
	});
});
http.get(url2, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		output[1] = output[1].concat(data);
	});
	response.on("end", function(){
		numEnds = numEnds + 1;
		if (numEnds === 3) {prettyprint(output);}
	});
});
http.get(url3, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		output[2] = output[2].concat(data);
	});
	response.on("end", function(){
		numEnds = numEnds + 1;
		if (numEnds === 3) {prettyprint(output);}
	});
});

var prettyprint =  function(arr) {
	arr.forEach(function(entry){
		console.log(entry);
	});
};