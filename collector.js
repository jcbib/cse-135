const url = 'https://collector.jak-cse135.site/';

let h = new Headers();
h.append('Accept', 'application/json');
h.append("Access-Control-Allow-Origin", "*");

fetch(url).then(async response => {
    try {
        const data = await response.json()
        console.log('response data?', data)
    } catch (error) {
        console.log('Error happened here!')
        console.error(error)
    }
})