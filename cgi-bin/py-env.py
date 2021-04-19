#!/usr/bin/python3.8
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")

print("<html>")
print("<head>")
print("<title> Environment Variables </title>")
print("</head>")

print("<body>")

print("<h1 align=center> Environment Variables </h1>")
print("<hr/>")

for param in os.environ.keys():
   print ("<b>%20s</b>: %s<br/>" % (param, os.environ[param]))

print("</body>")
print("</html>")