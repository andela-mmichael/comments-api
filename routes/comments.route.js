  var Comment = require('../models/comments.model');
  var express = require('express');
  var router = express.Router();

  module.exports = router;

/*** For /comments ROUTES  ***/

  //Get all comments
  router
    .get('/', function(req, res){
      Comment.find(function(err, comments){
        if(err){
          return res.send(err);
        }
        res.json(comments); //return all comments 
        console.log("Getting all comments.");
      });
    })  
    //Create new comment
    .post('/', function(req, res){

      var newComment = new Comment(req.body);
      newComment.save(res.json({ message: "Your comment has been successful added."}));
      console.log("creating new comment");
    })
    //Retrieve comment
    .get('/:name', function(req, res){
      Comment.findOne({name: req.params.name}, function(err, comment){
        if(err){
          res.send(err);
        }
        res.json(comment);
        console.log("Retrieving a comment");
      });
    })
    //Update comment
    .put('/:name', function(req, res){
      Comment.findOne({name: req.params.name}, function(err, comment){
        if(err){
          res.send(err);
        }

        for(com in req.body){
          comment[com] = req.body[com];
        }
        //save comment
        comment.save(res.json({ message: "Update successful!" }));
        console.log("Updating comment");
      });
   })  
    //Delete comment
    .delete('/:name', function(req, res){
      Comment.remove({name: req.params.name}, function(err, comment){
        if(err){
          res.send(err);
        }
        res.json({ message: "Comment deleted!"});
        console.log("Deleting a comment");
      });
    })

