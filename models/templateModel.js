const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("TemplateModel", TemplateSchema);
