// JSON Server module for JSON Server
const jsonServer = require('json-server');

// Importing express + sessions
const express = require('express');
const session = require('express-session');

// Mongo session store module
const mongoStore = require('connect-mongo');

// Body Parser for something
const bodyParser = require('body-parser');

// Importing routes
const staticRoutes = require('./routes/staticRoutes.js');
const performanceRoutes = require('./routes/performanceRoutes.js');
const activityRoutes = require('./routes/activityRoutes.js');

// Returns an Express server
const json = jsonServer.create();
const apiServer = express();

// Returns an Express router
const jsonRouter = jsonServer.router('data/db.json');

// Set default middlewares (logger, static, cors and no-cache)
json.use(jsonServer.defaults());

// Session middleware for apiServer
apiServer.use(session({
  secret: 'password123',
  resave: false,
  saveUninitialized: true,
  store: mongoStore.create({ mongoUrl: 'monogodb://jak-cse135.site/test'}),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 10000, 
  }
}));

// Other middleware for apiServer
apiServer.use(jsonServer.defaults());
apiServer.use(bodyParser.json())
apiServer.use(bodyParser.urlencoded({ extended: true }));

// Connect Routes
apiServer.use('/static', staticRoutes);
apiServer.use('/performance', performanceRoutes);
apiServer.use('/activity', activityRoutes);
json.use(jsonRouter);

json.listen(3000);
apiServer.listen(3001);