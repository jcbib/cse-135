// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get(apiPrefix, (req, res) => {
//     return res.send('Received a GET HTTP method');
// });

// server.post(apiPrefix, (req, res) => {
//     return res.send('Received a POST HTTP method');
// });

// server.put(apiPrefix, (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });

// server.delete(apiPrefix, (req, res) => {
//     return res.send('Received a DELETE HTTP method');
server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) });

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);