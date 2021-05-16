<?php
  header("Cache-Control: no-cache");
  header("Content-type: text/html");

  print "<!DOCTYPE html>";
  print "<html>";
  print "<head>";
  print "<title> GET Request Echo </title>";
  print "</head>";

  print "<body>";
  print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
  print "<h1 align=center> Get Request Echo </h1>";
  print "<hr/>";

  print "Raw query string: " . $_SERVER['QUERY_STRING'] . "<br/><br/>";

  print("<table> Formatted Query String:");
  
  foreach ($_GET as $key=>$val) {
    print "<tr><td>" . $key . ": </td><td>" .  $val . "</td></tr>";
  }
  
  print "</table>";

  print "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>";
  print "<noscript><img src=\"/nojs.php\"></noscript>";
  print "<script src=\"/collector.js\" async> </script>";

  print "</body>";
  print "</html>";
  
  ?>