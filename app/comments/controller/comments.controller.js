  var Comment = require('../models/comments.model');
  var express = require('express');
  var router  = express.Router();

  module.exports = {

    getAllComments: function(req, res){
      Comment.find(function(err, comments){
        if(err){
          return res.send(err);
        }
        res.json(comments); //return all comments 
      });
    },

    getComment: function(req, res){
      Comment.findOne({name : req.params.name}, function(err, comments){
        if(err){
          return res.send(err);
        }
        res.json(comments); //return all comments 
      });
    },

    postComment: function(req, res){
      var newComment = new Comment(req.body);
      newComment.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message: "Comment successfully added!"});
    },

    updateComment: function(req, res){
      Comment.findOne({name: req.params.name}, function(err, comment){
        if(err){
          res.send(err);
        }

        for(com in req.body){
          comment[com] = req.body[com];
        }
        //save comment
        comment.save(res.json({ message: "Update successful!" }));
      });
    },

    removeComment: function(req, res){
      Comment.remove({name: req.params.name}, function(err, comment){
        if(err){
          res.send(err);
        }
        res.json({ message: "Comment deleted!"});
      });
    }
  }


  