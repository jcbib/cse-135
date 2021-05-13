// const url = 'https://collector.jak-cse135.site/';

// let h = new Headers();
// h.append('Accept', 'application/json');
// h.append("Access-Control-Allow-Origin", "*");

// fetch(url, {
//     mode: 'no-cors'
// }).then(async response => {
//     try {
//         const data = await response.json()
//         console.log('response data?', data)
//     } catch (error) {
//         console.log('Error happened here!')
//         console.error(error)
//     }
// })

var startTime = window.performance.now();
var idle = false;
var idleTimeout = setTimeout(setIdle, 2000);

// const data = { username: 'test' };

const url = '/api/static'; 
var request = new Request(url, {
  method: 'POST',
  headers: new Headers(),
  body: '{ "username": "test" }'
});

request.json().then(function(json) {
  console.log("GASFISOFJASF ",json.username);
});

console.log("Request body being sent: " + request.body);

console.log("Request being sent: " + request);
console.log(request);

fetch(request)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("err:" + err));


// Static
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.cookieEnabled);

// Check JS - If we can run this file, this means that it's enabled
console.log("Javascript is enabled.");

// Check Images
function isImagesEnabled() {
  if ((document.getElementById("imgFlag").offsetWidth == 1 && document.getElementById("imgFlag").readyState == "complete") || 
      (document.getElementById("imgFlag").offsetWidth == 1 && document.getElementById("imgFlag").readyState == undefined)) {
        return "Images are enabled.";
      } else {
        return "Images are disabled.";
      }
}
console.log(isImagesEnabled());

// Check CSS
function isCSSEnabled() {
  if (document.styleSheets == null || document.styleSheets.length == 0) {
    return "CSS is disabled.";
  } else {
    return "CSS is enabled.";
  }
}
console.log(isCSSEnabled());

console.log(window.screen.width + "x" + window.screen.height);
console.log(window.innerWidth + "x" + window.innerHeight);
console.log(window.navigator.connection.effectiveType);


// Performance
console.log(window.performance.timing);

console.log(window.performance.timing.domContentLoadedEventStart);
console.log(window.performance.timing.domContentLoadedEventEnd);
console.log(window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart);

// Activity

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
  console.log("mouse location: ", e.clientX, e.clientY)
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
  console.log("mousedown button: ", e.button);
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
  console.log("mouseup button: ", e.button);
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
  console.log("key down: ", e.key);
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
  console.log("key up: ", e.key);
};

// Scroll Activity
document.onscroll = function(e) {
  console.log("scroll amount: "  + (window.pageYOffset || document.documentElement.scrollTop));
}

// Idle activity
function setIdle() {
  console.log("idle");
  idle = true; 
}

// User left and entered page
window.onload = function(e) {
  var currDateTime = new Date();
  console.log("User has entered the page", document.URL," at ", currDateTime.toUTCString());
}

window.beforeunload = function(e) {
  var currDateTime = new Date();
  console.log("User has left the page", document.URL," at ", currDateTime.toUTCString());
}

// User page is on
console.log(document.URL);

// JS is enabled
function jsEnabled() {
  console.log("Javascript is enabled.");
}
