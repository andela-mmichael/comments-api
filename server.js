  var express     = require('express');
  var bodyParser  = require('body-parser');
  var mongoose    = require('mongoose');
  var comments    = require('./routes/comments.route'); //route for app
  var config      = require('./config/config');         //config 
  var app         = express();    

  //configure body-parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  //Connect to database
  // var dbName = 'commentsDB';
  // mongoose.connect('mongodb://localhost/' + dbName);
  // var development = process.env.NODE_ENV;
  console.log(config.database.production.uri);
   mongoose.connect(config.database.production.uri);


  //Route middleware
  app.use('/api', comments);

  //Configure Port and Start Server
  // var port = process.env.PORT || 8100;

  app.listen(config.port, function(){
    console.log("My comments api is working here on port: ", config.port);
  });

