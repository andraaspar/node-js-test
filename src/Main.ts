/// <reference path='node.d.ts'/>
/// <reference path='../lib/illa/Log.ts'/>

illa.GLOBAL.http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	response.end('Árvíztűrő tükörfúrógép', 'utf-8');
});
server.listen(8888);

illa.Log.info('Yay!');