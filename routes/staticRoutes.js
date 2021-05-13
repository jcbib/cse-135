const jsonServer = require('json-server');
const jsonRouter = jsonServer.router('data/db.json');
const express = require('express');
const router = express.Router();

// Get all static data
router.get('/', function (req, res) { 
  res.json({ msg: 'hello' }); 
});

// Get specific session ID data
router.get('/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.post('/', function(req, res) { 
  // const db = apiRouter.db;
  // const table = db.get('test');
  // table.push(req.body).write();
  // res.send(req.body);
  res.json( {msg: 'posted posted' });
});

router.delete('/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});

/**
 * Request Body: user-agent, user-language, accept-cookie, allow-js, allow-img, allow-css,
 *               screen-width, screen-height, window-width, window-height, connection-type
 */
router.put('/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

module.exports = router;