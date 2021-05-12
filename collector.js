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
var currDateTime = new Date();

// Static
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.cookieEnabled);

// Check JS
// Check Images
// Check CSS

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
    idle = false;    
    console.log("idle end: ", window.performance.now());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  console.log("mousedown button: ", e.button);
};

document.onmouseup = function (e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    idle = false;
    console.log("idle end: ", window.performance.now());
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
    idle = false;
    console.log("idle end: ", window.performance.now());
    console.log("idle for: ", window.performance.now() - startTime);
  }
  startTime = window.performance.now();
  console.log("key down: ", e.key);
};

document.onkeyup = function(e) {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(setIdle, 2000);
  if ( idle ) {
    idle = false;
    console.log("idle end: ", window.performance.now());
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
  console.log("User has entered the page.");
}

window.beforeunload = function(e) {
  console.log("User has left the page.");
}

// User page is on
console.log(document.URL);
