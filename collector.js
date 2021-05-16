const STATIC_URL = '/api/static/';
const PERF_URL = '/api/performance/';
const ACTIVITY_URL = '/api/activity/';

var startTime = window.performance.now();
var idle = false;
var idleTimeout = setTimeout(setIdle, 2000);

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

var staticData = {
  'userAgent': navigator.userAgent,
  'userLanguage': navigator.language,
  'cookiesEnabled': navigator.cookieEnabled,
  'jsEnabled': true,
  'imageEnabled': isImagesEnabled(),
  'cssEnabled': isCSSEnabled(),
  'screenDimensions': window.screen.width + "x" + window.screen.height,
  'windowsDimensions': window.innerWidth + "x" + window.innerHeight,
  'networkConnectionType': window.navigator.connection.effectiveType
};

// POST Static 
fetch(STATIC_URL, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(staticData)
})
  .then(res => res.text())
  // .then(data => console.log("data: " + data))
  .catch(err => console.log("err: " + err));

// Performance
// console.log(window.performance.timing);

// console.log(window.performance.timing.domContentLoadedEventStart);
// console.log(window.performance.timing.domContentLoadedEventEnd);
// console.log(window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart);

var performanceData = {
  'wholeTimingObject': window.performance.timing,
  'timePageLoadStart': window.performance.timing.domContentLoadedEventStart,
  'timePageLoadEnd': window.performance.timing.domContentLoadedEventEnd,
  'totalTimeLoad': window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart
};

// POST Performance
fetch(PERF_URL, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(performanceData)
})
  .then(res => res.text())
  // .then(data => console.log("data: " + data))
  .catch(err => console.log("err: " + err));

// Activity
var activityList = [];
var currDate = new Date();
var mousePosX = 0;
var mousePosY = 0;
var mouseDownButton = '';
var mouseUpButton = '';
var keyDown = '';
var keyUp = '';
var scrollCoord = (window.pageYOffset || document.documentElement.scrollTop);
var idleTime = 0;
var idleStopTime = 0;
var timeUserLeft = 0;
var timeUserEnter = currDate.toUTCString();
var currentPage = window.location.href;

// Mouse Activity
document.onmousemove = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    // console.log("idle end: ", currDateTime.toUTCString());
    // console.log("idle for: ", window.performance.now() - startTime);
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  //console.log("mouse location: ", e.clientX, e.clientY)
  mousePosX = e.clientX;
  mousePosY = e.clientY;
  stashActivityData();
};

document.onmousedown = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    // console.log("idle end: ", currDateTime.toUTCString());
    // console.log("idle for: ", window.performance.now() - startTime);
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  // console.log("mousedown button: ", e.button);
  mouseDownButton = e.button;
  stashActivityData();
};

document.onmouseup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    // console.log("idle end: ", currDateTime.toUTCString());
    // console.log("idle for: ", window.performance.now() - startTime);
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  // console.log("mouseup button: ", e.button);
  mouseUpButton = e.button;
  stashActivityData();
};

// Keyboard Activity
document.onkeydown = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    // console.log("idle end: ", currDateTime.toUTCString());
    // console.log("idle for: ", window.performance.now() - startTime);
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  // console.log("key down: ", e.key);
  keyDown = e.key;
  stashActivityData();
};

document.onkeyup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    // console.log("idle end: ", currDateTime.toUTCString());
    // console.log("idle for: ", window.performance.now() - startTime);
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  // console.log("key up: ", e.key);
  keyUp = e.key;
  stashActivityData();
};

// Scroll Activity
document.onscroll = function (e) {
  // console.log("scroll amount: "  + (window.pageYOffset || document.documentElement.scrollTop));
  scrollCoord = (window.pageYOffset || document.documentElement.scrollTop);
  stashActivityData();
}

// Idle activity
function setIdle() {
  // console.log("idle");
  idle = true;
}

// User left and entered page
window.onload = function (e) {
  var currDateTime = new Date();
  // console.log("User has entered the page", document.URL," at ", currDateTime.toUTCString());
  timeUserEnter = currDateTime.toUTCString();
  stashActivityData();
}

window.onbeforeunload = function (e) {
  var currDateTime = new Date();
  // console.log("User has left the page", document.URL," at ", currDateTime.toUTCString());
  timeUserLeft = currDateTime.toUTCString();
  stashActivityData();
}

// POST Activity
function stashActivityData() {
  var activityData = {
    'mousePosX': mousePosX,
    'mousePosY': mousePosY,
    'mouseDownButton': mouseDownButton,
    'mouseUpButton': mouseUpButton,
    'keyDown': keyDown,
    'keyUp': keyUp,
    'scrollCoord': scrollCoord,
    'idleTime': idleTime,
    'idleStopTime': idleStopTime,
    'timeUserLeft': timeUserLeft,
    'timeUserEnter': timeUserEnter,
    'currentPage': window.location.href
  };

  activityList.push(activityData);

  mouseDownButton = '';
  mouseUpButton = '';
  keyDown = '';
  keyUp = '';
  idleTime = 0;
  idleStopTime = 0;
};

function fetchActivityData() {

  fetch(ACTIVITY_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(activityList)
  })
    .then(res => res.text())
    // .then(data => console.log("data: " + data))
    .catch(err => console.log("err: " + err));

  activityList = [];
};

// Send data every set seconds
setInterval(function(){ fetchActivityData(); }, 500);

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