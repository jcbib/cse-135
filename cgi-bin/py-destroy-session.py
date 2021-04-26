#!/usr/bin/python3.8
from http import cookies
import hashlib, time, os, sys

# Start the session
cookie = cookies.SimpleCookie()
cookie_string = os.environ.get('HTTP_COOKIE')

# Load the cookie
cookie.load(cookie_string)

# Reset the cookies set earlier
cookie['sid'] = ''
cookie['username'] = ''

print ("<html>")
print ("<head>")
print ("<title>PHP Session Destroyed</title>")
print ("</head>")
print ("<body>")
print ("<h1>Session Destroyed</h1>")
print ("<a href=\"/hw2/py-state-demo.html\">Back to the Python CGI Form</a><br />")
print ("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a><br />")
print ("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print ("</body>")
print ("</html>")