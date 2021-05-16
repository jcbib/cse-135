const express = require('express');
const router = express.Router();
const PerformanceModel = require('../schema/performance');
const { DATA_LIMIT } = require('../constants/envConstants');

// Get all performance data
router.get('/', async function (req, res) { 
  try {
    const performanceObj = await PerformanceModel.find();
    res.json(performanceObj);
  } catch(error) {
    res.json({message: error});
  }
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
  
  const currLen = req.session.collectorData['performance'].length;

  req.session.collectorData['performance'].push(req.body);

  if ( currLen >= DATA_LIMIT ) {
    req.session.collectorData['performance'] = req.session.collectorData['performance'].slice(currLen - DATA_LIMIT);
  }

  PerformanceModel.findOne({sessionId: req.sessionID}, async function(err, entry) {
    if (err) res.json({ message: error});
    if ( entry ) {
      try {
        const postSuccess = await PerformanceModel.findOneAndUpdate({sessionId: req.sessionID}, 
          { performanceData: req.session.collectorData['performance'] });
        res.json(postSuccess);
      } catch(error) {
        res.json({message: error});
      }
    } else {
      const performanceObj = new PerformanceModel({
        sessionId: req.sessionID,
        performanceData: [{
          wholeTimingObject: Object,
          timePageLoadStart: Number,
          timePageLoadEnd: Number,
          totalTimeLoad: Number
        }]
      });
      
      try {
        const postSuccess = await performanceObj.save();
        res.json(postSuccess);
      } catch(error) {
        res.json({message: error});
      }
    }
  });
});

module.exports = router;