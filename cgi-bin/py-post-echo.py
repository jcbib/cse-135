#!/usr/bin/python3.8
import sys

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title> POST Request Echo </title>")
print("</head>")
print("<body>")

print("<body>")
print("<h1 align=center> POST Request Echo </h1>")
print("<hr/>")

data = sys.stdin.read()

split_body = data.split("&")

print("<b>Message Body:</b><br />\n")

print("<ul>\n")

for element in split_body:
  pair = element.split("=")
  if len(pair[1]) != 0:
    print("<li>{key} = {value}</li>\n".format(key=pair[0], value=pair[1]))

print("</ul>")
# Print HTML footer
print("</body>")
print("</html>")