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
router.post('/', async function (req, res) { 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['static'] ) {
    req.session.collectorData['static'] = req.body;
  }

  const staticObj = new StaticModel({
    userAgent: req.body.userAgent,
    userLanguage: req.body.userLanguage,
    cookiesEnabled: req.body.cookiesEnabled,
    jsEnabled: req.body.jsEnabled,
    imageEnabled: req.body.imageEnabled,
    cssEnabled: req.body.cssEnabled,
    screenDimensions: req.body.screenDimensions,
    windowsDimensions: req.body.windowsDimensions,
    networkConnectionType: req.body.networkConnectionType
  });

  let staticData = 0;

  try {
    staticData = await staticObj.findOne({sessionId: req.sessionID});
  } catch(error) {
    res.json({message: error});
  }

  if ( staticData == 0 ) {
    try {
      const postSuccess = await staticObj.save();
      res.json(postSuccess);
    } catch(error) {
      res.json({message: error});
    }
  }
  
});

module.exports = router;