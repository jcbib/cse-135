<?php
  session_start(); // Start the PHP_Session function

  $name = $_SESSION["username"];

  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title>PHP Sessions</title>";
  print "</head>";
  print "<body>";
  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";

  print "<h1>PHP Sessions Page 2</h1>";

  if ($name){
    print("<p><b>Name:</b> $name");
  }else{
    print "<p><b>Name:</b> You do not have a name set</p>";
  }
  print "<br/><br/>";
  print "<a href=\"/cgi-bin/php-sessions-1.php\">Session Page 1</a><br/>";
  print "<a href=\"/hw2/php-state-demo.html\">PHP CGI Form</a><br />";
  print "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
  print "<button type=\"submit\">Destroy Session</button>";
  print "</form>";

  print "<script src=\"../collector.js\" async> </script>";

  print "</body>";
  print "</html>";

?>
