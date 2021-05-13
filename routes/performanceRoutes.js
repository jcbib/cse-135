const server = require('json-server');
const router = server.router('../data/db.json');

// Get all performance data
router.get('/performance', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

// Get specific id performance data
router.get('/performance/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.post('/performance', function(req, res) { 
  res.json({ msg: 'test'}); 
});

router.delete('/performance/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.put('/performance/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;