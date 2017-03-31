var express = require('express');
var app = express();

app.use('/',express.static('public'));

app.listen(8088,function(){
	console.log('App listen at 8088');
});