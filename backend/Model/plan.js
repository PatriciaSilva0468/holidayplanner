const mongoose = require('mongoose');
// Plan schema structure
const planSchema = mongoose.Schema({
    area: String,
    country: String,
    whyGo: String,
    wheretoGo: String,
    timeInDays: Number,
    levelofDifficulty: String,
    entraceFees: String,
    image: String,
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = {Plan};