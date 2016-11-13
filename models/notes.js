var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Notes = new Schema({
  title: String,
  description: String,
  updatedAt: Date

});

module.exports = mongoose.model('Notes', Notes);
