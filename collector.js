const url = 'https://jak-cse135.site/';

let h = new Headers();
h.append('Accept', 'application/json');

console.log("1");

let req = new Request(url, {
    method: 'POST',
    headers: h,
    mode: 'cors'
});

console.log("2");
fetch(url).then(async response => {
    try {
        const data = await response.json()
        console.log('response data?', data)
    } catch (error) {
        console.log('Error happened here!')
        console.error(error)
    }
})