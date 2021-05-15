#!/usr/bin/python3.8
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")

print("<html>")
print("<head>")
print("<title> Environment Variables </title>")
print("</head>")

print("<body>")
print("<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>")
print("<h1 align=center> Environment Variables </h1>")
print("<hr/>")

for param in os.environ.keys():
   print ("<b>{}</b>: {}<br/>".format(param, os.environ[param]))

print("<script src=\"/collector.js\" async> </script>")

print("</body>")
print("</html>")