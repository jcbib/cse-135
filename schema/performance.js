const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
    sessionId: String,
    performanceData: [{
        wholeTimingObject: Object,
        timePageLoadStart: Decimal128,
        timePageLoadEnd: Decimal128,
        totalTimeLoad: Decimal128
    }]
});

const PerformanceModel = mongoose.model('Performance Data', PerformanceSchema);

module.exports = PerformanceModel;