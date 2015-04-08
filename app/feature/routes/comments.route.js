  var controller = require('../controller/comments.controller');
  var express = require('express');
  var router = express.Router();

  module.exports = router;

/*** For /comments ROUTES  ***/

  //Get all comments
  router
    .get('/', controller.getAllComments)  
    //Create new comment
    .post('/', controller.postComment)
    //Retrieve comment
    .get('/:name', controller.getComment)
    //Update comment
    .put('/:name', controller.updateComment)  
    //Delete comment
    .delete('/:name', controller.removeComment);

