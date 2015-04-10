  // Model for database
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CommentSchema = new Schema({
    name: String,
    content: String,
    createdOn: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('Comment', CommentSchema);



