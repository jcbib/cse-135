const jsonServer = require('json-server');
const jsonRouter = jsonServer.router('data/db.json');
const express = require('express');
const router = express.Router();

// Add activity data routes
router.get('/', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

router.get('/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

router.post('/', function(req, res) { 
  console.log(req.body);
  res.send("Post Success!");
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;