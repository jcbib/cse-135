<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> General Request Echo </title>";
  print "</head>";

  print "<body>";
  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
  print "<h1 align=center> General Request Echo </h1>";
  print "<hr/>";

  # HTTP Protocol, HTTP Method, and the Query String are all environment variables
  print "<p><b>HTTP Protocol: </b>" . $_SERVER["SERVER_PROTOCOL"] . "</p>";
  print "<p><b>HTTP Method: </b>" . $_SERVER["REQUEST_METHOD"] . "</p>";
  print "<p><b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "</p>";

  print "<b>Message Body:</b><br />\n";
  print "<ul>\n";

  #Print out the Query string
  foreach ($_POST as $key=>$val) {
    print "<li>" . $key .  "=" . $val . "</li>\n";
  }
  
  print "</ul>";

  print "<script src=\"../collector.js\" async> </script>";

  print "</body>";
  print "</html>";
?>