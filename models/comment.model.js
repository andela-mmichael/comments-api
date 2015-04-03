  //
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CommentSchema = new Schema({
    name: String,
    content: String,
    createdOn: Date
  });

  module.exports = mongoose.model('Comment', CommentSchema);



