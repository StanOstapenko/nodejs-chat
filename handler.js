/**
 * Created by stasostapenko on 9/27/15.
 */
var fs = require('fs');



module.exports = function(req, res) {

	switch (req.url) {
		case '/':
			sendFile("index.html", res);
	};


	function sendFile(fileName, res) {

	};

};