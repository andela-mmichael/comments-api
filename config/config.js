'use strict';

module.exports = (function(){
  return {
      port: process.env.PORT || 8100,
      database: {
          development: { 
            uri: 'mongodb://localhost/commentsDB' 
          },
          production: { 
            uri: process.env.MONGOLAB_URI 
          }
      }

  };


})();