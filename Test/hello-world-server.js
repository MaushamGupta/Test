var http = require('http');

var buf = new Buffer(26);
for(var i=0;i<26;i++)
	{
	buf[i]=i+97;
	}
http.createServer(function handler(req, res) {
//http.createServer(function (req, res) {
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.write(buf.toString('ascii')+'\n');
	    res.end('Hello World\n');
}).listen(1338, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1338/');

