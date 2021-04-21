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

print("<body>")
print("<h1 align=center> General Request Echo </h1>")
print("<hr/>")

# Get environment vars
print("<table>");
print("<tr><td>Protocol:</td><td>{}</td></tr>".format(os.environ["SERVER_PROTOCOL"]))
print("<tr><td>Method:</td><td>{}</td></tr>".format(os.environ["REQUEST_METHOD"]))
print("<tr><td>Query String:</td><td>{}</td></tr>".format(os.environ["QUERY_STRING"]))
print("<tr><td>Message Body:</td><td>{}</td></tr>".format(data))

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
