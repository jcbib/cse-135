<?php
  session_start();
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  session_destroy();
  $_SESSION = []; // Clears the $_SESSION variable
  
  print "<html>";
  print "<head>";
  print "<title>PHP Session Destroyed</title>";
  print "</head>";
  print "<body>";
  print "<h1>Session Destroyed</h1>";
  print "<a href=\"/hw2/php-state-demo.html\">Back to the PHP CGI Form</a><br />";
  print "<a href=\"/cgi-bin/php-sessions-1.php\">Back to Page 1</a><br />";
  print "<a href=\"/cgi-bin/php-sessions-2.php\">Back to Page 2</a>";
  print "</body>";
  print "</html>";

?>