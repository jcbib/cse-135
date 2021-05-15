const express = require('express');
const router = express.Router();

// Add activity data routes
router.get('/', function (req, res) { 
  res.json(req.session.collectorData['activity']); 
});

router.post('/', function(req, res) { 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['activity'] ) {
    req.session.collectorData['activity'] = [];
  }
  req.session.collectorData['activity'].push(req.body);
  req.session.activity = {};
  var response = req.sessionID + ": " + req.session.collectorData['activity'];
  res.send(response);
});

module.exports = router;