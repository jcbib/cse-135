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

print("<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>")
print("<h1 align=center> General Request Echo </h1>")
print("<hr/>")

data = sys.stdin.read()

# Get environment vars
print("<table>");
print("<tr><td><b>HTTP Protocol:</b></td><td>{}</td></tr>".format(os.environ["SERVER_PROTOCOL"]))
print("<tr><td><b>HTTP Method:</b></td><td>{}</td></tr>".format(os.environ["REQUEST_METHOD"]))
print("<tr><td><b>Query String:</b></td><td>{}</td></tr>".format(os.environ["QUERY_STRING"]))
print("<tr><td><b>Message Body:</b></td><td>{}</td></tr>".format(data))

print("</table>")

print("<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>")
print("<noscript><img src=\"/nojs.php\"></noscript>")
print("<script src=\"/collector.js\" async> </script>")

# Print HTML footer
print("</body>")
print("</html>")