const server = require('json-server');
const router = server.router('data/db.json');

// Add activity data routes
router.get('/', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

router.get('/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

router.post('/activity', function(req, res) { 
  console.log(req.body);
  res.send("Post Success!");
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;