<?php

header("Cache-Control: no-cache");
header("Content-type: text/html");

print "<html>";
print "<head>";
print "<title> Environment Variables </title>";
print "</head>";

print "<body>";
print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";
print "<h1 align=center> Environment Variables </h1>";
print "<hr/>";

foreach ($_SERVER as $key=>$val) {
  print "<b>" . $key . ": </b>" .  $val . "<br/>";
}

print "<script src=\"../collector.js\" async> </script>";

print "</body>";
print "</html>";

?>