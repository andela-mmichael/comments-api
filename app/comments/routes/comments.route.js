var controller = require('../controller/comments.controller');
var express = require('express');
var router = express.Router();

module.exports = router;

// APP ROUTES
router  
  .get('/', controller.getAllComments)      //Get all comments
  
  .post('/', controller.postComment)        //Create new comment
  
  .get('/:name', controller.getComment)     //Retrieve comment
  
  .put('/:name', controller.updateComment)  //Update comment
  
  .delete('/:name', controller.removeComment);  //Delete comment

