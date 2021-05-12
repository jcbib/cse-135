// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();
var server_2 = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());
server_2.use(jsonServer.defaults());

// Add custom routes
server_2.get('/custom', function (req, res) { res.json({ msg: 'hello' }) });
server_2.get('/custom_2', function(req, res) { res.json({ msg: 'AaSDFAS' })});

// Returns an Express router
var router = jsonServer.router('db.json');
var router_2 = jsonServer.router('db.json');

server.use(router);
server_2.use(router_2);

server.listen(3000);
server_2.listen(3001);