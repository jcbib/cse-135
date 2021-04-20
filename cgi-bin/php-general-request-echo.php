<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> General Request Echo </title>";
  print "</head>";

  print "<body>";
  print "<h1 align=center> General Request Echo </h1>";
  print "<hr/>";

  # HTTP Protocol, HTTP Method, and the Query String are all environment variables
  print "<p><b>HTTP Protocol: </b>" . $_SERVER["SERVER_PROTOCOL"] . "</p>";
  print "<p><b>HTTP Method: </b>" . $_SERVER["REQUEST_METHOD"] . "</p>";
  print "<p><b>Query String: </b>" . $_SERVER["QUERY_STRING"] . "</p>";

  $form_data = stream_get_contents(STDIN);

  print "<p><b>Message Body:</b> $form_data </p>";
  
  print "</body>";
  print "</html>";
?>