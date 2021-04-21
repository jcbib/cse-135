#!/usr/bin/node
// var os = require('os');

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');


// console.log("Cache-Control: no-cache")
// console.log("Content-type: text/html\r\n\r\n")

// console.log("<html>")
// console.log("<head>")
// console.log("<title>Hello, NodeJS!</title>")
// console.log("</head>")
// console.log("<body>")

// console.log("<h1>Hello, NodeJS!</h1>")
// console.log("<p>This page was generated with NodeJS! :D</p>")

// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var d = new Date();

// console.log("<p>Current Time: %s %s %s %s:%s:%s %s</p>", weekday[d.getDay()], months[d.getMonth()], d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getFullYear());
// // console.log("<p>Current Time: " + dateFormat(now, "dddd mmmm dS HH:MM:ss yyyy") + "</p>");
// // IP Address is an environment variable when using CGI
// // address = os.environ['REMOTE_ADDR']
// // var networkInterfaces = os.networkInterfaces();
// // console.log("<p>Your IP Address: {}</p>".format(networkInterfaces))

// console.log("</body>");
// console.log("</html>");