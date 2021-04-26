#!/usr/bin/python3.8
from http import cookies
import hashlib, time, os, sys

# Start the session
cookie = cookies.SimpleCookie()
cookie_string = os.environ.get('HTTP_COOKIE')
username = ""

# if new session
if not cookie_string:
    hash = hashlib.sha1()
    sid = hash.update(str(time.time())).hexdigest()
    cookie['sid'] = sid
else:
    cookie.load(cookie_string)
    sid = cookie['sid'].value

# Get username from POST request
data = sys.stdin.read()
split_body = data.split("&")

if len(split_body) == 1:
    messageElement = split_body[0].split("=")
    if len(messageElement) == 2 and len(messageElement[1]) != 0:
        cookie['username'] = messageElement[1]

print(cookie)
print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")

print("<h1>Python Sessions Page 1</h1>")

if cookie_string:
    cookie.load(cookie_string)
    username = cookie['username'].value

if len(username) == 0:
    print("<p><b>Name:</b> {}".format(username))
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



# <?php
#   session_start(); // Start the PHP_Session function

  
#   $name = isset($_POST["username"]) ? $_POST["username"] : $_SESSION["username"];
#   $_SESSION["username"] = $name;

#   header("Cache-Control: no-cache");
#   header("Content-type: text/html");

#   print "<!DOCTYPE html>";
#   print "<html>";
#   print "<head>";
#   print "<title>PHP Sessions</title>";
#   print "</head>";
#   print "<body>";

#   print "<h1>PHP Sessions Page 1</h1>";

#   if ($name){
#     print("<p><b>Name:</b> $name");
#   }else{
#     print "<p><b>Name:</b> You do not have a name set</p>";
#   }
#   print "<br/><br/>";
#   print "<a href=\"/cgi-bin/php-sessions-2.php\">Session Page 2</a><br/>";
#   print "<a href=\"/hw2/php-state-demo.html\">PHP CGI Form</a><br />";
#   print "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
#   print "<button type=\"submit\">Destroy Session</button>";
#   print "</form>";

#   print "</body>";
#   print "</html>";

# ?>
