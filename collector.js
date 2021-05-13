var startTime = window.performance.now();
var idle = false;
var idleTimeout = setTimeout(setIdle, 2000);

// Static
// var userAgent = navigator.userAgent;
// var userLanguage = navigator.language;
// var cookiesEnabled = navigator.cookieEnabled;

// Check Images
function isImagesEnabled() {
  if ((document.getElementById("imgFlag").offsetWidth == 1 && document.getElementById("imgFlag").readyState == "complete") || 
      (document.getElementById("imgFlag").offsetWidth == 1 && document.getElementById("imgFlag").readyState == undefined)) {
    return true;
  } else {
    return false;
  }
};

// Check CSS
function isCSSEnabled() {
  if (document.styleSheets == null || document.styleSheets.length == 0) {
    return false;
  } else {
    return true;
  }
}

// var screenDimensions = window.screen.width + "x" + window.screen.height;
// var windowDimensions = window.innerWidth + "x" + window.innerHeight;
// var networkConnectionType = window.navigator.connection.effectiveType;

var staticData = {
  'userAgent' : navigator.userAgent,
  'userLanguage' : navigator.language,
  'cookiesEnabled' : navigator.cookieEnabled,
  'jsEnabled' : true,
  'imageEnabled': isImagesEnabled(),
  'cssEnabled' : isCSSEnabled(),
  'screenDimensions' : window.screen.width + "x" + window.screen.height,
  'windowsDimensions' : window.innerWidth + "x" + window.innerHeight,
  'networkConnectionType' : window.navigator.connection.effectiveType
};

// Fetch Static 
const staticUrl = '/api/static/'; 
fetch(staticUrl, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(staticData)
})
  .then(res => res.json())
  .then(data => console.log("data: " + JSON.stringify(data)))
  .catch(err => console.log("err: " + err));

// Performance
// console.log(window.performance.timing);

// console.log(window.performance.timing.domContentLoadedEventStart);
// console.log(window.performance.timing.domContentLoadedEventEnd);
// console.log(window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart);

var performanceData = {
  'wholeTimingObject' : window.performance.timing,
  'timePageLoadStart' : window.performance.timing.domContentLoadedEventStart,
  'timePageLoadEnd' : window.performance.timing.domContentLoadedEventEnd,
  'totalTimeLoad' : window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart
};

// var performanceUrl = '/../..';
// fetch(performanceUrl, {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: performanceData
// })
//   .then(res => res.json())
//   .then(data => console.log("data: " + JSON.stringify(data)))
//   .catch(err => console.log("err: " + err));

// Activity
var mousePosX = 0;
var mousePosY = 0;
var mouseDownButton = '';
var mouseUpButton = '';
var keyDown = '';
var keyUp = '';
var scrollCoord = 0;
var idleTime = 0;
var idleStopTime = 0;
var timeUserLeft = 0;
var timeUserEnter = 0;
var currentPage = document.URL;

// Mouse Activity
document.onmousemove = function(e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    var currDateTime = new Date();
    idle = false;
    console.log("idle end: ", currDateTime.toUTCString());
    console.log("idle for: ", window.performance.now() - startTime, "ms");
  }
  startTime = window.performance.now();
  //console.log("mouse location: ", e.clientX, e.clientY)
  mousePosX = e.clientX;
  mousePosY = e.clientY;
};

document.onmousedown = function(e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    var currDateTime = new Date();
    idle = false;    
    console.log("idle end: ", currDateTime.toUTCString());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  // console.log("mousedown button: ", e.button);
  mouseDownButton = e.button;
};

document.onmouseup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    var currDateTime = new Date();
    idle = false;
    console.log("idle end: ", currDateTime.toUTCString());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  // console.log("mouseup button: ", e.button);
  mouseUpButton = e.button;
};

// Keyboard Activity
document.onkeydown = function(e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    var currDateTime = new Date();
    idle = false;
    console.log("idle end: ", currDateTime.toUTCString());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  // console.log("key down: ", e.key);
  keyDown = e.key;
};

document.onkeyup = function(e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    var currDateTime = new Date();
    idle = false;
    console.log("idle end: ", currDateTime.toUTCString());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  // console.log("key up: ", e.key);
  keyUp = e.key;
};

// Scroll Activity
document.onscroll = function(e) {
  // console.log("scroll amount: "  + (window.pageYOffset || document.documentElement.scrollTop));
  scrollCoord = (window.pageYOffset || document.documentElement.scrollTop);
}

// Idle activity
function setIdle() {
  // console.log("idle");
  idle = true; 
}

// User left and entered page
window.onload = function(e) {
  var currDateTime = new Date();
  // console.log("User has entered the page", document.URL," at ", currDateTime.toUTCString());
  timeUserEnter = currDateTime.toUTCString();
}

window.beforeunload = function(e) {
  var currDateTime = new Date();
  // console.log("User has left the page", document.URL," at ", currDateTime.toUTCString());
  timeUserLeft = currDateTime.toUTCString();
}

var activityUrl = '/api/activity/';
function fetchActivityData() {

  var activityData = {
    'mousePosX' : mousePosX,
    'mousePosY' : mousePosY,
    'mouseDownButton' : mouseDownButton,
    'mouseUpButton' : mouseUpButton,
    'keyDown' : keyDown,
    'keyUp' : keyUp,
    'scrollCoord' : scrollCoord,
    'idleTime' : idleTime,
    'idleStopTime' : idleStopTime,
    'timeUserLeft' : timeUserLeft,
    'timeUserEnter' : timeUserEnter,
    'currentPage' : currentPage
  };

  fetch(activityUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(activityData)
  })
    .then(res => res.json())
    .then(data => console.log("data: " + JSON.stringify(data)))
    .catch(err => console.log("err: " + err));
}

setInterval(function() { fetchActivityData(); }, 2000);

// User page is on
// console.log(document.URL);

// fetch(url, {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: '{ "usernfasfsa": "test" }'
// })
//   .then(res => res.json())
//   .then(data => console.log("data:" + JSON.stringify(data)))
//   .catch(err => console.log("err:" + err));