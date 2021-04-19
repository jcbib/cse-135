#!/usr/bin/python3.8
import sys

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>POST Message Body</title>")
print("</head>")
print("<body>")

print("<body>")
print("<h1 align=center> POST Message Body </h1>")
print("<hr/>")

data = sys.stdin.read()

print("Message Body: {}<br/>".format(data));

# Print HTML footer
print("</body>");
print("</html>");