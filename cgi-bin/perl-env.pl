#!/usr/bin/perl
print "Cache-Control: no-cache\n";
print "Content-type: text/html \n\n";

# print HTML file top
print <<END;
<!DOCTYPE html>
<html><head><title>Environment Variables</title>
</head><body><h1 align="center">Environment Variables</h1>
<hr>
END

print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";

# Loop over the environment variables and print each variable and its value
foreach $variable (sort keys %ENV) {
  print "<b>$variable:</b> $ENV{$variable}<br />\n";
}

print "<script src=\"../collector.js\" async> </script>";

# Print the HTML file bottom
print "</body></html>";
