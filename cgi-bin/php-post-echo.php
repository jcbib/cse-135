<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> POST Request Echo </title>";
  print "</head>";

  print "<body>";
  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
  print "<h1 align=center> POST Request Echo </h1>";
  print "<hr/>";

  print "<b>Message Body:</b><br />\n";
  print "<ul>\n";

  #Print out the Query string
  foreach ($_POST as $key=>$val) {
    print "<li>" . $key .  "=" . $val . "</li>\n";
  }
    
  print "</ul>";
  
  print "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>";
  print "<noscript><img src=\"/nojs.php\"></noscript>";
  print "<script src=\"/collector.js\" async> </script>";

  print "</body>";
  print "</html>";
?>