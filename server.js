const jsonServer = require('json-server');
const bodyParser = require('body-parser');

// const staticRoutes = require('./routes/staticRoutes.js');
// const performanceRoutes = require('./routes/performanceRoutes.js');
// const activityRoutes = require('./routes/activityRoutes.js');

// Returns an Express server
const json = jsonServer.create();
const apiServer = jsonServer.create();

// Returns an Express router
const jsonRouter = jsonServer.router('data/db.json');


const router = apiServer.router('data/db.json');

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

// Set default middlewares (logger, static, cors and no-cache)
json.use(jsonServer.defaults());
apiServer.use(jsonServer.defaults());
apiServer.use(bodyParser.json())
apiServer.use(bodyParser.urlencoded({ extended: true }));

// Connect Routes
// apiServer.use('/static', staticRoutes);
// apiServer.use('/performance', performanceRoutes);
// apiServer.use('/activity', activityRoutes);
apiServer.use(router);
json.use(jsonRouter);

json.listen(3000);
apiServer.listen(3001);