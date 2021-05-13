const express = require('express');
const router = express.Router();

// Get all performance data
router.get('/', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

// Get specific id performance data
router.get('/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.post('/', function(req, res) { 
  res.json({ msg: 'test'}); 
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;