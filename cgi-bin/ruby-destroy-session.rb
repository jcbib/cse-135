#!/usr/bin/ruby
require 'cgi'
require 'cgi/session'
require 'cgi/session/pstore'

cgi = CGI.new

session = CGI::Session.new(cgi, 'database_manager' => CGI::Session::PStore)
session.delete()

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>Ruby Session Destroyed</title>"
puts "</head>"
puts "<body>"
puts "<h1>Session Destroyed</h1>"
puts "<a href=\"/hw2/ruby-cgiform.html\">Back to the Ruby CGI Form</a><br />"
puts "<a href=\"/cgi-bin/ruby-sessions-1.rb\">Back to Page 1</a><br />"
puts "<a href=\"/cgi-bin/ruby-sessions-2.rb\">Back to Page 2</a>"
puts "</body>"
puts "</html>"



# #!/usr/bin/perl
# use CGI::Session;
# use CGI;

# print "Content-type: text/html\n\n";

# my $cgi = new CGI;

# my $session;
# {
#     my $sid = $cgi->cookie("SITE_SID") || $cgi->param("sid") || undef;
#     $session  = new CGI::Session($sid);
# }
# $session->delete();

# print "<html>";
# print "<head>";
# print "<title>Perl Session Destroyed</title>";
# print "</head>";
# print "<body>";
# print "<h1>Session Destroyed</h1>";
# print "<a href=\"/hw2/perl-cgiform.html\">Back to the Perl CGI Form</a><br />";
# print "<a href=\"/cgi-bin/perl-sessions-1.pl\">Back to Page 1</a><br />";
# print "<a href=\"/cgi-bin/perl-sessions-2.pl\">Back to Page 2</a>";
# print "</body>";
# print "</html>";
