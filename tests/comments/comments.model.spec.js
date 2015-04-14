var mongoose = require('mongoose');
var CommentModel = require('../../app/comments/models/comments.model');
var config = require('../../config/config');

mongoose.connect(config.database[process.env.NODE_ENV].uri); //Connect to database

var comment;  //Global variable

//Unit test
describe('Comment Model Unit Test', function(){
  beforeEach(function(){
    comment = new CommentModel({
      name: 'Just your name',
      content: 'What\'s on your mind'
    });
    
  });

  afterEach(function(done){
    CommentModel.remove({}, function(err){
      if(err){
        console.log(err);
      }
    });     
    done();
  });

  it('should save a new collection', function(done){
    comment.save(function(err){
      if(err){
        console.log(err);
      }
      expect(err).toBeNull();
      done();
    });

  });

});

