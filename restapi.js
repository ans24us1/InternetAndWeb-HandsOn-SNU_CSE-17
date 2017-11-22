var express = require('express');
var app = express();
var router = express.Router();    
module.exports = router;
// REST API
router.route('/')
router.get('/',function(req, res, next) {
  res.send('Get');
})
router.post('/',function(req, res, next) {
  res.send('Post');
});

router.route('/:id')
router.get('/:id',function(req, res, next) {
  res.send('Get id: ' + req.params.id);
})
router.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id);
})
router.delete('/:id',function(req, res, next) {
  res.send('Delete id: ' + req.params.id);
});

