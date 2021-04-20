<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> POST Message Body </title>";
  print "</head>";

  print "<body>";
  print "<h1 align=center> POST Message Body </h1>";
  print "<hr/>";

  print "<b>Message Body:</b><br />\n";
  print "<ul>\n";

  #Print out the Query string
  foreach ($_POST as $key=>$val) {
    print "<li>" . $key .  "=" . $val . "</li>\n";
  }
    
  print "</ul>";
  print "</body>";
  print "</html>";
?>