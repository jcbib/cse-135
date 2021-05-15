const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
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
});

const StaticSchema = new Schema({
    userAgent: String,
    userLanguage: String,
    cookiesEnabled: Boolean,
    jsEnabled: Boolean,
    imageEnabled: Boolean,
    cssEnabled: Boolean,
    screenDimensions: Number,
    windowsDimensions: Number,
    networkConnectionType: String
});

const PerformanceSchema = new Schema({
    wholeTimingObject: Number,
    timePageLoadStart: Number,
    timePageLoadEnd: Number,
    totalTimeLoad: Number
});

const ActivityModel = mongoose.model('Activity Data', ActivitySchema);

const StaticModel = mongoose.model('Static Data', StaticSchema);

const PerformanceModel = mongoose.model('Performance Data', PerformanceSchema);

module.exports = {
    ActivityModel,
    StaticModel,
    PerformanceModel
};