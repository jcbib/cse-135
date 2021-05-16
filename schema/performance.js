const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
    sessionId: String,
    performanceData: [{
        wholeTimingObject: Object,
        timePageLoadStart: BigInt,
        timePageLoadEnd: BigInt,
        totalTimeLoad: BigInt
    }]
});

const PerformanceModel = mongoose.model('Performance Data', PerformanceSchema);

module.exports = PerformanceModel;