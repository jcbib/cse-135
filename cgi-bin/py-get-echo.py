#!/usr/bin/python3.8
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>GET query string</title>")
print("</head>")
print("<body>")

print("<body>")
print("<h1 align=center> Environment Variables </h1>")
print("<hr/>")

print("Raw query string: %s\n<br/><br/>", os.environ["QUERY_STRING"])
# print("<table> Formatted Query String:")

# query = os.environ["QUERY_STRING"]




# print("</table>")
print("</body>")
print("</html>")