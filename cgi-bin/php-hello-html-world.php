<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");
  print "<html>";
  print "<head>";
  print "<title>Hello, PHP!</title>";
  print "</head>";
  print "<body>";

  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
  print "<h1>Hello, PHP!</h1>";
  print "<p>This page was generated with the PHP!!!!! O_O :D</p>";
  
  print "<p>Current Time: " . date("l M d H:i:s Y") . "</p>";

  # IP Address is an environment variable when using CGI
  print "<p>Your IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>";

  print "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>";
  print "<noscript><img src=\"/nojs.php\"></noscript>";
  print "<script src=\"/collector.js\" async> </script>";

  print "</body>";
  print "</html>";
?>