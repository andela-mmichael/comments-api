refvar app = require('../../server');
var CommentModel = require('../../app/comments/models/comments.model')
var request = require('supertest');
var mongoose = require('mongoose');
var comment;

// End to End test for routes
describe('Comment Route End to End Test', function(){
  beforeEach(function(){
    comment = new CommentModel({
      name: 'John Doe',
      content: 'I like your post.'
    });
    comment.save(function(err){
      if(err){
        console.log(err);
      }
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

  describe('GET /comments', function(){
    it('should respond with all comments', function(done){
      request(app)
        .get('/comments')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          expect(res.body).toBeDefined();
          expect(res.body.length).toEqual(1);
        done();
      });
    });
  });

  describe('GET /comments/name', function(){
    it('should respond with a comment', function(done){
      request(app)
        .get('/comments/' + 'John Doe')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          expect(res.body.name).toEqual('John Doe');
        done();
      });
    });
  });

  describe('POST /comments/', function(){
    it('should create a new comment', function(done){
      request(app)
        .post('/comments')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          expect(res.body).toEqual({ message: 'Comment successfully added!' });
        done();
      });
    });
  });

  describe('PUT /comments/name', function(){
    it('should update a comment', function(done){
      comment = { name: "Johnson"}
      request(app)
        .put('/comments/' + 'John Doe')
        .send(comment)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          console.log(res.body);
          expect(res.body).toEqual({ message: "Update successful!" });
        done();
      });
    });
  });

  describe('DELETE /comments/name', function(){
    it('should delete a comment', function(done){
      request(app)
        .delete('/comments/' + 'John Doe')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err){
            return done(err);
          }
          expect(res.body).toEqual({ message: "Comment deleted!"});
        done();
      });
    });
  });


});

