const server = require('json-server');
const router = server.router('data/db.json');

// Add activity data routes
router.get('/activity', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

router.get('/activity/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

router.post('/activity', function(req, res) { 
  console.log(req.body);
  res.send("Post Success!");
});

router.delete('/activity/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

router.put('/activity/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;