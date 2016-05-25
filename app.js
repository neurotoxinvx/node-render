/*
* @ author: Neurotoxin
* @ desc: A simple Demo of NodeJS render
* @ deps: Express Jade
*/

var express = require('express'),
		request = require('ajax-request');

var app = express(),
		port = process.env.PORT || 3000,
		path = require('path');

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);

console.log('服务已启动，请访问 localhost:'+ port +'访问');

var getlists = function(){
	request({
		url: 'http://live.jufan.tv/cgi/hall/mic',
		method: 'GET',
		json: true
	}, function(err, res, body){
			var lists = body.content.list;
			app.get('/', function(req, res){
				res.render('index', {
					lists: lists
				});
			})
	});
}

getlists();

