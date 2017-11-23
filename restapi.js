var express = require('express');
var app = express();
var router = express.Router();    
module.exports = router;
// REST API
//router.route('/restapi')
router.get('/',function(req, res, next) {
	console.log('In restapi file1');
  res.send('In Restapi Get');
  next();
})
router.post('/',function(req, res, next) {
  res.send('Post');
});

//router.route('/:id')
router.get('/:id',function(req, res, next) {
  res.send('<strong>In Restapi Get id: ' + req.params.id +'</strong>');
  next();
})
router.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id);
})
router.delete('/:id',function(req, res, next) {
  res.send('Delete id: ' + req.params.id);
  next();
});

app.use('/', router);
app.get('/', function(req, res) {
  res.send('Hello world');
});
console.log('In Restapi File');