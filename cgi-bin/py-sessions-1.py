#!/usr/bin/python3.8
from http import cookies
import hashlib, time, os, sys

# Start the session
cookie = cookies.SimpleCookie()
cookie_string = os.environ.get('HTTP_COOKIE')

# Split cookie string to see if sid exists
cookie_dict = {}
if cookie_string:
    split_cookie = cookie_string.split(';')
    for pair in split_cookie:
        pair_list = pair.split('=')
        if len(pair_list) == 2 :
            key, val = pair_list
            cookie_dict[key.strip()] = val
    cookie.load(cookie_string)

username = ""

# if new session
if 'sid' not in cookie_dict or cookie_dict['sid'] == '':
    m = hashlib.sha1()
    m.update(str(time.time()).encode('utf-8'))
    sid = m.hexdigest()
    cookie['sid'] = sid
else:
    sid = cookie['sid'].value

# Get username from POST request
data = sys.stdin.read()
split_body = data.split("&")

if len(split_body) == 1:
    messageElement = split_body[0].split("=")
    if len(messageElement) == 2 and len(messageElement[1]) != 0:
        cookie['username'] = messageElement[1]
    elif 'username' not in cookie_dict:
        cookie['username'] = ""
elif 'username' not in cookie_dict:
     cookie['username'] = ""

print(cookie)
print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")

print("<h1>Python Sessions Page 1</h1>")

username = cookie['username'].value

print(cookie_string)
if len(username) != 0:
    print("<p><b>Name:</b> {}</p>".format(username))
else:
    print("<p><b>Name:</b> You do not have a name set</p>")

print ("<br/><br/>")
print ("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
print ("<a href=\"/hw2/py-state-demo.html\">Python CGI Form</a><br />")
print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print ("<button type=\"submit\">Destroy Session</button>")
print ("</form>")

# Print HTML footer
print("</body>")
print("</html>")
