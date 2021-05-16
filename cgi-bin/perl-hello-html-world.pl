#!/usr/bin/perl

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>Hello, Perl!</title>";
print "</head>";
print "<body>";

print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";

print "<h1>Jon, Anh, and Kelly were here - Hello, Perl!</h1>";
print "<p>This page was generated with the Perl programming langauge</p>";

$date = localtime();
print "<p>Current Time: $date</p>";

# IP Address is an environment variable when using CGI
$address = $ENV{REMOTE_ADDR};
print "<p>Your IP Address: $address</p>";

print "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>";
print "<noscript><img src=\"/nojs.php\"></noscript>";
print "<script src=\"../collector.js\" async> </script>";

print "</body>";
print "</html>";