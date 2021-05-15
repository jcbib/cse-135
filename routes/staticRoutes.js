const express = require('express');
const router = express.Router();

// Get all static data
router.get('/', function (req, res) { 
  res.json(req.session.collectorData['static']); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function(req, res) { 
  req.session.collectorData = {}; 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['static'] ) {
    req.session.collectorData['static'] = req.body;
  }
  req.session.static = {};
  var response = req.sessionID + ": " + JSON.stringify(req.session.collectorData['static']);
  res.send(response);
});

module.exports = router;