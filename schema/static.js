const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaticSchema = new Schema({
    userAgent: String,
    userLanguage: String,
    cookiesEnabled: Boolean,
    jsEnabled: Boolean,
    imageEnabled: Boolean,
    cssEnabled: Boolean,
    screenDimensions: String,
    windowsDimensions: String,
    networkConnectionType: String
});

const StaticModel = mongoose.model('Static Data', StaticSchema);

module.exports = StaticModel;