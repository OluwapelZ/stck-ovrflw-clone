import  express from 'express';
var router = express.Router();

/* Users */
router.post('/users/login', function(req, res) {
  res.send('respond with a resource');
});
router.post('/users', function(req, res) {
  res.send('respond with a resource');
});

/* Questions */
router.post('/questions', function(req, res) {
  res.send('respond with a resource');
});
router.get('/questions', function(req, res) {
  res.send('respond with a resource');
});
router.post('/questions/:id/answer', function(req, res) {
  res.send('respond with a resource');
});
router.put('/questions/:id/upvote', function(req, res) {
  res.send('respond with a resource');
});
router.put('/questions/:id/downvote', function(req, res) {
  res.send('respond with a resource');
});
router.get('/search', function(req, res) {
  res.send('respond with a resource')
});

module.exports = router;
