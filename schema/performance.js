const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
    sessionId: String,
    wholeTimingObject: Number,
    timePageLoadStart: Number,
    timePageLoadEnd: Number,
    totalTimeLoad: Number
});

const PerformanceModel = mongoose.model('Performance Data', PerformanceSchema);

module.exports = PerformanceModel;