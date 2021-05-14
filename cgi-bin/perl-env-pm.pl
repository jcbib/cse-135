#!/usr/bin/perl

# The below line includes the CGI.pm Perl library
use CGI qw/:standard/;     

# CGI.pm Method
print "Cache-Control: no-cache\n";
print header;
print "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>";

# CGI.pm Method
print start_html("Environment Variables");

print "<h1 align='center'>Environment Variables</h1><hr />";

# Loop through all of the environment variables, then print each variable and its value
foreach my $key (sort(keys(%ENV))) {
   print  "$key = $ENV{$key}<br />\n";
}

print "<script src=\"../collector.js\" async> </script>\n";

# CGI.pm method
print end_html;
