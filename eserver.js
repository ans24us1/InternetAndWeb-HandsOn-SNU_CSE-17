var express = require('express');
var app = express();
var path = require('path');
var restapi=require('./restapi.js');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
var router = express.Router(); 
module.exports = router;


app.get('/', function (req, res) {
res.render('index',function(err, html) {
  res.send(html);
});
})

app.get('/restapi', function (req, res) {
app.use('/',restapi);
});


var server = app.listen(8081, function () {
   var host = '127.0.0.1';
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})