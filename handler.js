/**
 * Created by stasostapenko on 9/27/15.
 */
var fs = require('fs'),
		config = require('config'),
		path = require('path'),
		chat = require('./chat'),
		url = require('url');

module.exports = function(req, res) {

	switch (req.url) {
		case '/':
			sendFile("/index.html", res);
			break;

		case '/subscribe':
			chat.subscribe(req, res);
			break;

		case '/publish':
				req.on('data', function(data){
					var body = JSON.parse(data);
					chat.publish(body.message);
					res.end('ok');
				});
	};


	function sendFile(fileName, res) {
		var filePath = path.join(config.publicRoot, fileName);

		var stream = new fs.ReadStream(filePath, {
			encoding: 'utf-8'
		});

		stream.on('data', function(data) {
			res.statusCode = 200;
			res.end(data)
		})

	};

};