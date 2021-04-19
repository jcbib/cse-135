#!/usr/bin/python
from datetime import datetime
import os
import html

print("Cache-Control: no-cache\n")
print("Content-type: text/html\n\n")
print("<html>")
print("<head>")
print("<title>Hello, Python!</title>")
print("</head>")
print("<body>")

print("<h1>Hello, Python!</h1>")
print("<p>This page was generated with Python! :D</p>")

dt_string = datetime.now().strftime("%A %B %d %H:%M:%S %Y")
print("<p>Current Time: {}</p>".format(dt_string))

# IP Address is an environment variable when using CGI
address = html.escape(os.environ['REMOTE_ADDR'])
print("<p>Your IP Address: {}</p>".format(address))

print("</body>")
print("</html>")