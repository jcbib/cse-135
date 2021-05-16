const express = require('express');
const router = express.Router();
const ActivityModel = require('../schema/activity')

// Add activity data routes
router.get('/', function (req, res) { 
  try {
    const activityObj = await ActivityModel.find();
    res.json(activityObj);
  } catch(error) {
    res.json({message: error});
  }
});

router.post('/', function(req, res) {
  if ( !req.session.collectorData ) {
    req.session.collectorData = {};
  }
  if ( !req.session.collectorData['activity'] ) {
    req.session.collectorData['activity'] = [];
  }

  req.session.collectorData['activity'] = req.session.collectorData['activity'].concat(req.body);

  ActivityModel.findOne({sessionId: req.sessionID}, async function(err, entry) {
    if (err) res.json({ message: error});
    if ( entry ) {
      try {
        const postSuccess = await ActivityModel.findOneAndUpdate({sessionId: req.sessionID}, 
          { activityData: req.session.collectorData['activity']});
        res.json(postSuccess);
      } catch(error) {
        res.json({message: error});
      }
    } else {
      const activityObj = new ActivityModel({
        sessionId: req.sessionID,
        activityData: [{
          mousePosX: req.body.mousePosX,
          mousePosY: req.body.mousePosY,
          mouseDownButton: req.body.mouseDownButton,
          mouseUpButton: req.body.mouseUpButton,
          keyDown: req.body.keyDown,
          keyUp: req.body.keyUp,
          scrollCoord: req.body.scrollCoord,
          idleTime: req.body.idleTime,
          idleStopTime: req.body.idleStopTime,
          timeUserLeft: req.body.timeUserLeft,
          timeUserEnter: req.body.timeUserEnter,
          currentPage: req.body.currentPage
        }]
      });
      
      try {
        const postSuccess = await activityObj.save();
        res.json(postSuccess);
      } catch(error) {
        res.json({message: error});
      }
    }
  });
});

module.exports = router;