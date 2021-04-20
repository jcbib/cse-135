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

  print "<b>Raw query string: </b>" . $_SERVER['QUERY_STRING'] . "<br/>";

  print("<table> Formatted Query String:")
  
  // foreach ($_GET as $key=>$val) {
  //   print "<tr><td>" . $key . ": </td><td>" .  $val . "</td></tr>";
  // }
  
  print "</table>";
  print "</body>";
  print "</html>";
  
  ?>