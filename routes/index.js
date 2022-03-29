var express = require('express');
var router = express.Router();
var events = require('events')


var event = new events.EventEmitter()

/* GET home page. */
router.get('/', function(req, res, next) {
  var json = '{"a":"c"}'
  // const a = isJson(json)
  res.send({
    // test:a
  })
});


module.exports = router;

