#!/usr/bin/python3.8
import os
import sys

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>General Request Echo</title>")
print("</head>")
print("<body>")

print("<body>")
print("<h1 align=center> General Request Echo </h1>")
print("<hr/>")

data = sys.stdin.read()

# Get environment vars
print("<table>");
print("<tr><td>Protocol:</td><td>{}</td></tr>".format(os.environ["SERVER_PROTOCOL"]))
print("<tr><td>Method:</td><td>{}</td></tr>".format(os.environ["REQUEST_METHOD"]))
print("<tr><td>Query String:</td><td>{}</td></tr>".format(os.environ["QUERY_STRING"]))
print("<tr><td>Message Body:</td><td>{}</td></tr>".format(data))

# Print HTML footer
print("</body>");
print("</html>");