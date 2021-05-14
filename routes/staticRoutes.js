const express = require('express');
const router = express.Router();

// Get all static data
router.get('/', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

// Get specific session ID data
router.get('/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function(req, res) { 
  if (!req.session.static) {
    req.session.static = req.body;
  }
  var response = req.sessionID + ": " + req.session.static;
  res.send(response);
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;