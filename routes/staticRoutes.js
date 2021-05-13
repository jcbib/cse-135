const server = require('json-server');
const router = server.router('../data/db.json');

// Get all static data
router.get('/static', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

// Get specific session ID data
router.get('/static/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/static', function(req, res) { 
  const db = apiRouter.db;
  const table = db.get('test');
  table.push(req.body).write();
  res.send(req.body);
});

router.delete('/static/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.put('/static/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;