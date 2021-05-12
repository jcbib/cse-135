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
  console.log("mouse location: ", e.clientX, e.clientY)
};

document.onmousedown = function(e) {
  console.log("mousedown button: ", e.button);
};

document.onmouseup = function (e) {
  console.log("mouseup button: ", e.button);
};

// Keyboard Activity
document.onkeydown = function(e) {
  console.log("key down: ", e.button);
};

document.onkeyup = function(e) {
  console.log("key up: ", e.button);
};


