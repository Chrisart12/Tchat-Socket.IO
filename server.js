let http = require('http');

let server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Salut tout le monde !');
});

server.listen(8080);