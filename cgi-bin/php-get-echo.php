<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> GET Request Echo </title>";
  print "</head>";

  print "<body>";
  print "<h1 align=center> Get Request Echo </h1>";
  print "<hr/>";

  print "<b>Query String: </b>" . $_SERVER['QUERY_STRING'] . "<br/>";

  foreach ($_GET as $key=>$val) {
    print "<b>" . $key . ": </b>" .  $val . "<br/>";
  }
  
  print "</body>";
  print "</html>";
  
  ?>