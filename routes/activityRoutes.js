const express = require('express');
const router = express.Router();

// Add activity data routes
router.get('/', function (req, res) { 
  res.json(req.session.activity['activityData']); 
});

router.post('/', function(req, res) { 
  if (!req.session.activity) {
    req.session.activity = {};
    req.session.activity['activityData'].push(req.body);
  } else {
    req.session.activity['activityData'] = [];
    req.session.activity['activityData'].push(req.body);
  }
  var response = req.sessionID + ": " + JSON.stringify(req.session.activity);
  res.send(response);
});

module.exports = router;