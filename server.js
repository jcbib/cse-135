
// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) });

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);


// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//     return res.send('Received a GET HTTP method');
// });

// app.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method');
// });

// app.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });

// app.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method');
// });

// app.listen(process.env.PORT, () =>
//     console.log(`Example app listening on port ${process.env.PORT}!`),
// );

// app.listen(3000, () =>
//     console.log(`Example app listening on port 3000!`),
// );