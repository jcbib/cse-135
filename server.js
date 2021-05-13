// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var json = jsonServer.create();
var apiServer = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
json.use(jsonServer.defaults());
apiServer.use(jsonServer.defaults());

// Add static data routes
apiServer.get('/static', function (req, res) { 
  res.json({ msg: 'hello' }); 
});
apiServer.get('/static/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});
apiServer.post('/static', function(req, res) { 
  res.json({ msg: 'test'}); 
});
apiServer.delete('/static/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});
apiServer.put('/static/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

// Add performance data routes
apiServer.get('/performance', function (req, res) { 
  res.json({ msg: 'hello' }); 
});
apiServer.get('/performance/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});
apiServer.post('/performance', function(req, res) { 
  res.json({ msg: 'test'}); 
});
apiServer.delete('/performance/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});
apiServer.put('/performance/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

// Add activity data routes
apiServer.get('/activity', function (req, res) { 
  res.json({ msg: 'hello' }); 
});
apiServer.get('/activity/:sessionId', function(req, res) { 
  res.json({ msg: 'AaSDFAS' }); 
});
apiServer.post('/activity', function(req, res) { 
  console.log(req.body);
  res.send("Post Success!");
});
apiServer.delete('/activity/:sessionId', function(req, res) {
  res.json({ msg: 'you deleted'}); 
});
apiServer.put('/activity/:sessionId', function(req, res) {
  res.json({ msg: 'you put something'});
});

// Returns an Express router
var jsonRouter = jsonServer.router('db.json');
var apiRouter = jsonServer.router('db.json');

json.use(jsonRouter);
apiServer.use(apiRouter);

json.listen(3000);
apiServer.listen(3001);