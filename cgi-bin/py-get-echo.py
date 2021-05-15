#!/usr/bin/python3.8
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>GET Request Echo</title>")
print("</head>")
print("<body>")

print("<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>")
print("<h1 align=center> GET Request Echo </h1>")
print("<hr/>")

print("Raw query string: {}\n<br/><br/>".format(os.environ["QUERY_STRING"]))
print("<table> Formatted Query String:")

query = os.environ["QUERY_STRING"]
split_query = query.split("&")

for element in split_query:
  pair = element.split("=")
  print("<tr><td>{key}:</td><td>{value}</td></tr>\n".format(key=pair[0], value=pair[1]))

print("</table>")

print("<script src=\"/collector.js\" async> </script>")

print("</body>")
print("</html>")