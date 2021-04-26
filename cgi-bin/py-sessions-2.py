#!/usr/bin/python3.8
from http import cookies
import os
import sys

cookie = cookies.SimpleCookie()
username = ""

# print (cookie)
print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")

cookie_string = os.environ.get('HTTP_COOKIE')

print("<h1>Python Sessions Page 2</h1>")

if cookie_string:
    cookie.load(cookie_string)
    username = cookie['username'].value

if len(username) != 0:
    print("<p><b>Name:</b> {}".format(username))
else:
    print("<p><b>Name:</b> You do not have a name set</p>")

print ("<br/><br/>")
print ("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a><br/>")
print ("<a href=\"/hw2/py-state-demo.html\">Python CGI Form</a><br />")
print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print ("<button type=\"submit\">Destroy Session</button>")
print ("</form>")

# Print HTML footer
print("</body>");
print("</html>");