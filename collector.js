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

// POST Static with 5 retries
function fetchStaticData(retries = 5) {
  fetch(STATIC_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(staticData)
  })
    .then(res => {
      if (res.ok) console.log(res.text());
      if (retries > 0) {
        return fetchStaticData(retries - 1);
      } else {
        throw new Error(res);
      }
    })
    .catch(err => console.log("err: " + err));
};

// fetch(STATIC_URL, {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(staticData)
// })
//   .then(res => res.text())
//   // .then(data => console.log("data: " + data))
//   .catch(err => console.log("err: " + err));

// Performance

var performanceData = {
  'wholeTimingObject': window.performance.timing,
  'timePageLoadStart': window.performance.timing.domContentLoadedEventStart,
  'timePageLoadEnd': window.performance.timing.domContentLoadedEventEnd,
  'totalTimeLoad': window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart
};

// POST Performance with 5 retries
function fetchPerformanceData(retries = 5) {
  fetch(PERF_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(performanceData)
  })
    .then(res => {
      if (res.ok) return res.text();
      if (retries > 0) {
        return fetchPerformanceData(retries - 1);
      } else {
        throw new Error(res);
      }
    })
    .catch(err => console.log("err: " + err));
}

// fetch(PERF_URL, {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(performanceData)
// })
//   .then(res => res.text())
//   // .then(data => console.log("data: " + data))
//   .catch(err => console.log("err: " + err));

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
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
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
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  mouseDownButton = e.button;
  stashActivityData();
};

document.onmouseup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
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
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  keyDown = e.key;
  stashActivityData();
};

document.onkeyup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if (idle) {
    var currDateTime = new Date();
    idle = false;
    idleTime = window.performance.now() - startTime;
    idleStopTime = currDateTime.toUTCString();
  }
  startTime = window.performance.now();
  keyUp = e.key;
  stashActivityData();
};

// Scroll Activity
document.onscroll = function (e) {
  scrollCoord = (window.pageYOffset || document.documentElement.scrollTop);
  stashActivityData();
}

// Idle activity
function setIdle() {
  idle = true;
}

// User left and entered page

// After user has loaded the page, send a POST request for static and performance data 
// Store activity data in a list to be sent as a batch in an interval 
window.onload = function (e) {
  var currDateTime = new Date();
  timeUserEnter = currDateTime.toUTCString();
  fetchStaticData();
  fetchPerformanceData();
  stashActivityData();
}

window.onbeforeunload = function (e) {
  var currDateTime = new Date();
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

// POST Activity with 5 retries
function fetchActivityData(retries = 5) {
  fetch(ACTIVITY_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(activityList)
  })
    .then(res => {
      if (res.ok) {
        activityList = [];
        return res.text();
      }
      if (retries > 0) {
        return fetchActivityData(retries - 1);
      } else {
        throw new Error(res);
      }
    })
    .catch(err => console.log("err: " + err));
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