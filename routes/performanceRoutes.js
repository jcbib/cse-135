const express = require('express');
const router = express.Router();

// Get all performance data
router.get('/', function (req, res) { 
  res.json(req.session.collectorData['performance']); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.post('/', function(req, res) { 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['performance'] ) {
    req.session.collectorData['performance'] = [];
  }
  req.session.collectorData['performance'].push(req.body);
  req.session.performance = {};
  var response = req.sessionID + ": " + req.session.collectorData['performance'];
  res.send(response);
});

module.exports = router;