<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");
  print "<html>";
  print "<head>";
  print "<title>Hello, PHP!</title>";
  print "</head>";
  print "<body>";

  print "<h1>Hello, PHP!</h1>";
  print "<p>This page was generated with the PHP!!!!! O_O :D</p>";
  
  print "<p>Current Time: " . date("l M d H:i:s Y") . "</p>";

  # IP Address is an environment variable when using CGI
  print "<p>Your IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>";

  print "</body>";
  print "</html>";
?>