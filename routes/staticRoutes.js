const express = require('express');
const router = express.Router();

// Get all static data
router.get('/', function (req, res) { 
  res.json(req.session.static); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function(req, res) { 
  if (!req.session.static) {
    req.session.static = req.body;
  }
  var response = req.sessionID + ": " + JSON.stringify(req.session.static);
  res.send(response);
});

module.exports = router;