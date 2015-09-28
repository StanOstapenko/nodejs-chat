/**
 * Created by stasostapenko on 9/27/15.
 */

var clients = [];

module.exports.subscribe = function(req, res) {
	clients.push(res);
};

module.exports.publish = function(message) {
	clients.forEach(function(client){
		client.end(message);
	});
};