const mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 const TemplateSchema = new Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('TemplateModel', TemplateSchema);