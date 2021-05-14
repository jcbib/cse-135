const express = require('express');
const router = express.Router();

// Get all performance data
router.get('/', function (req, res) { 
  res.json(req.session); 
});

/**
 * Request Body: timing-object, load-start, load-end, load-time
 */
router.post('/', function(req, res) { 
  if (!req.session.performance) {
    req.session.performance = [];
    req.session.performance.push(req.body);
  } else {
    req.session.performance.push(req.body);
  }
  var response = req.sessionID + ": " + JSON.stringify(req.session.performance);
  res.send(response);
});

module.exports = router;