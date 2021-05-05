const url = 'https://jak-cse135.site/json';

let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(uri, {
    method: 'POST',
    headers: h,
    mode: 'cors'
});

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