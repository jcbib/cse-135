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

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.cookieEnabled);

console.log(window.screen.availWidth + "x" + window.screen.availHeight);
console.log(window.screen.width + "x" + window.screen.height);