/**
 * Created by stasostapenko on 9/27/15.
 */
var http = require('http'),
		handler = require('./handler');

var server = new http.Server();

server.on('request', handler);

server.listen(3000);
