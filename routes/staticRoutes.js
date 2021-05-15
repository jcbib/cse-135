const express = require('express');
const router = express.Router();
const StaticModel = require('../schema/static')

// Get all static data
router.get('/', function (req, res) { 
  res.json(req.session.collectorData['static']); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function(req, res) { 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['static'] ) {
    req.session.collectorData['static'] = req.body;
  }

  const staticObj = new StaticModel(
    req.body
  );

  try {
    const postSuccess = await staticObj.save();
    res.json(postSuccess);
  } catch(error) {
    res.json({message: err});
  }

  // var response = req.sessionID + ": " + JSON.stringify(req.session.collectorData['static']);
  // res.send(response);
});

module.exports = router;