#!/usr/bin/python3.8
import os
import sys
import requests

# Start the session
session = requests.session()
URL = "../hw2/py-state-demo.html"

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html>")
print("<head>")
print("<title>Python Sessions</title>")
print("</head>")
print("<body>")

print("<h1>Python Sessions Page 1</h1>")

print("<h2>")
print(session.cookies)
print("</h2")

print ("<br/><br/>")
print ("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a><br/>")
print ("<a href=\"/hw2/py-state-demo.html\">Python CGI Form</a><br />")
print ("<form style=\"margin-top:30px\" action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print ("<button type=\"submit\">Destroy Session</button>")
print ("</form>")


# Print HTML footer
print("</body>");
print("</html>");



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
