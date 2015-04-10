'use strict';

module.exports = function(){
  return {
      port: process.env.PORT || 8100,
      database: {
          development: { 
            uri: 'mongodb://localhost/commentsDB' 
          },
          testing: {
            uri: 'mongodb://localhost/commentsDB-test'
          },
          production: { 
            uri: process.env.MONGOLAB_URI 
          }
      }

  };


};