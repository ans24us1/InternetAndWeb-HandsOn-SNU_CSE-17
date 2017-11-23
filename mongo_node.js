// Retrieve

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var jvalue = { "name":"PClassTest", "city":"Delhi", "subjects":[  "Criminal", "Corporate"], "job":"Researcher" }
// Connect to the db
var collection;
var db=MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(err) {
    console.log("We are not connected");
  }
  else{
	  console.log("Try my");
  collection=db.collection('log');
  }
});

// index
app.get('/', function(req, res) {
	
	 collection.insertOne(jvalue,function(err,res){
		  
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  res.send('Hello world');
});

var server = app.listen(3000, function() {
  console.log('Express is listening to http://localhost:3000');
});