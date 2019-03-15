let http = require('http');
let md5 = require('MD5');


let server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Salut Issa !');
});

server.listen(1337);
let io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket) {

	var me;
	socket.on('login', function(user) {
		me = user;
		me.id = user.mail.replace('@','-').replace('.','-');
		me.avatar = 'https://gravatar.com/avatar/' + md5(user.mail) + '?s=50';
		socket.emit('logged');
		io.sockets.emit('newusr', me);
	})
});
