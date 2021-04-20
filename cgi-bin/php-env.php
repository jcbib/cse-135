<?php

header("Cache-Control: no-cache");
header("Content-type: application/json");

print "<html>";
print "<head>";
print "<title> Environment Variables </title>";
print "</head>";

print "<body>";
print "<h1 align=center> Environment Variables </h1>";
print "<hr/>";

foreach ($_ENV as $v) {
  print "<b>$v:</b> $_ENV[$v] <br/>";
}

print "</body>";
print "</html>";

?>