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
fetch(req)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('BAD HTTP stuff');
        }
    })
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((err) => {
        console.log('ERROR:', err.message);
    });