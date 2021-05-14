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
  if (!req.session.activity) {
    req.session.activity = req.body;
  }
  res.send(req.sessionID, ": ", req.session.activity);
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;