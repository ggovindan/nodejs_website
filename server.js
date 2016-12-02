'use strict';
var express = require('express');
var app = express();
var jade_compiler = require('jade');
var template = require('jade');

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response, next) {
	try {
		var home_template = jade_compiler.compileFile(__dirname + '/source/templates/homepage.jade');
		var html = home_template({title: 'Home'});
		response.send(html);		
	}
	catch(e) {
		next(e);
	}
});

app.get('/About', function(request, response, next) {
	try {
		var about_template = jade_compiler.compileFile(__dirname + '/source/templates/About.jade');
		var html = about_template({title: 'About'});
		response.send(html);
	}
	catch(e) {
		next(e);
	}
});

app.get('/Contact', function(request, response, next) {
	try {
			var contact_template = jade_compiler.compileFile(__dirname +'/source/templates/Contact.jade');
			var html = contact_template({title: 'contact'});
			response.send(html);
	}
	catch(e) {
		next(e);
	}
});

app.get('/Music', function(request, response, next) {
	try {
			var music_template = jade_compiler.compileFile(__dirname + '/source/templates/Music.jade');
			var html = music_template({title: 'My Musical Musings'});
			response.send(html);
	}
	catch(e) {
		next(e);
	}
});

app.listen(process.env.PORT || 2222, function() {
	console.log('listening on port 2222')
});