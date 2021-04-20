<?php

header("Cache-Control: no-cache");
header("Content-type: text/html");

print "<html>";
print "<head>";
print "<title> Environment Variables </title>";
print "</head>";

print "<body>";
print "<h1 align=center> Environment Variables </h1>";
print "<hr/>";

foreach ($_SERVER as $v) {
  print "<b>" . $v . ":</b>" .  $_SERVER[$v] . "<br/>";
}

print "</body>";
print "</html>";

?>