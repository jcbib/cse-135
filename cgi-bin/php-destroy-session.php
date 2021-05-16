<?php
  session_start();
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  
  $_SESSION = []; // Clears the $_SESSION variable
  session_destroy();
  
  print "<html>";
  print "<head>";
  print "<title>PHP Session Destroyed</title>";
  print "</head>";
  print "<body>";
  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
  print "<h1>Session Destroyed</h1>";
  print "<a href=\"/hw2/php-state-demo.html\">Back to the PHP CGI Form</a><br />";
  print "<a href=\"/cgi-bin/php-sessions-1.php\">Back to Page 1</a><br />";
  print "<a href=\"/cgi-bin/php-sessions-2.php\">Back to Page 2</a>";
  print "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>";
  print "<noscript><img src=\"/nojs.php\"></noscript>";
  print "<script src=\"/collector.js\" async> </script>";
  print "</body>";
  print "</html>";

?>