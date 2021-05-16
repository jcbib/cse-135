const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    sessionId: String,
    activityData: [{
      mousePosX: Number,
      mousePosY: Number,
      mouseDownButton: String,
      mouseUpButton: String,
      keyDown: String,
      keyUp: String,
      scrollCoord: Number,
      idleTime: Number,
      idleStopTime: Number,
      timeUserLeft: Number,
      timeUserEnter: Number,
      currentPage: String
    }]
});

const ActivityModel = mongoose.model('Activity Data', ActivitySchema);

module.exports = ActivityModel;