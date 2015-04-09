// var app = require('../../server');
var mongoose = require('mongoose');
var should = require('should');
// var CommentModel = mongoose.model('Comment');
var CommentModel = require('../../app/comments/models/comments.model');
// var config  = require('../../config/config');
var comment;  //Global variable
  console.log("am here");
//Connect to Database
// var db = mongoose.connect(config.database[process.env.NODE_ENV].uri, function(err){
//   if(err){
//     // console.log("Couldn't connect to Database");
//   }
// });

//Unit test
describe('Comment Model Unit Test', function(){
   console.log("got here");
  describe('Save Method', function(){
    beforeEach(function(done){
      comment = new CommentModel({
        name: 'Just any name',
        content: 'What\'s on your mind',
        createdOn: new Date()
      });
      done();
       console.log("created comment");
    });

    afterEach(function(done){
      CommentModel.remove(function(err){
        if(err){
          console.log(err);
          console.log("checking");
        }
      });
      done();
    });

    it('should save a new collection', function(done){
      comment.save(function(err, task){
        console.log("called");
        expect(err).toBeNull();
        done();
      });
    });
      
  });

});