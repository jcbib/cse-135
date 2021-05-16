const express = require('express');
const router = express.Router();
const StaticModel = require('../schema/static')

// Get all static data
router.get('/', async function (req, res) {
   try {
     const staticObj = await StaticModel.find();
     res.json(staticObj);
   } catch(error) {
     res.json({message: error});
   }
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function (req, res) { 
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['static'] ) {
    req.session.collectorData['static'] = req.body;
  }

  StaticModel.findOne({sessionId: req.sessionID}, async function(err, entry) {
    if (err) res.json({ message: error});
    if ( entry ) {
      res.send("This has already been saved!");
    } else {
      const staticObj = new StaticModel({
        sessionId: req.sessionID,
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
      try {
        const postSuccess = await staticObj.save();
        res.send("Post Success!");
      } catch(error) {
        res.json({message: error});
      }
    }
  });
  
});

module.exports = router;