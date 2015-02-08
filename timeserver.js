var net = require('net');
var port =  process.argv[2];

// create server
var server = net.createServer(function(socket){
	socket.end(formatCurrentDate() + "\n");
});
server.listen(port);

// format needed: "YYYY-MM-DD hh:mm"
var formatCurrentDate = function(){
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mn = date.getMinutes();

	var output = y + "-" 
				+ (m < 10 ? "0" + m : m) + "-" 
				+ (d < 10 ? "0" + d : d) + " "
				+ (h < 10 ? "0" + h : h) + ":"
				+ (mn < 10 ? "0" + mn : mn);

	return output;
};