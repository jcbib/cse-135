// MODULES
const jsonServer = require('json-server');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');
const bodyParser = require('body-parser');

// LOCAL FILES
const staticRoutes = require('./routes/staticRoutes.js');
const performanceRoutes = require('./routes/performanceRoutes.js');
const activityRoutes = require('./routes/activityRoutes.js');
const { DATABASE_URL, LOCAL_URL, MAX_AGE, JSON_PORT, API_PORT } = require('./constants/envConstants');

// Returns an Express server
const json = jsonServer.create();
const apiServer = express();

// Set up default mongoose connection
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => {
  console.log('connection error: ', error);
});

// Returns an Express router
const jsonRouter = jsonServer.router('data/db.json');

// Set default middlewares (logger, static, cors and no-cache)
json.use(jsonServer.defaults());

// Session middleware for apiServer
apiServer.use(session({
  secret: 'password123',
  resave: false,
  saveUninitialized: true,
  store: mongoStore.create({ mongoUrl:LOCAL_URL }),
  cookie: {
    maxAge: MAX_AGE, 
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

json.listen(JSON_PORT);
apiServer.listen(API_PORT);