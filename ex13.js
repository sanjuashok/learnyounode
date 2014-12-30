var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
	var urlProps = url.parse(req.url, true);
	var date = new Date(urlProps.query.iso);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(urlProps.pathname === '/api/parsetime'){
		res.end(JSON.stringify({hour:date.getHours(),
		         minute:date.getMinutes(),
		         second:date.getSeconds()}
		         ));
	}
	if(urlProps.pathname === '/api/unixtime'){
		res.end(JSON.stringify({unixtime: date.getTime()}));
	}
});

server.listen(port);