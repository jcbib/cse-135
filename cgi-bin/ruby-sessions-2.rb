#!/usr/bin/ruby

require 'cgi'
require 'cgi/session'
require 'cgi/session/pstore'

# data_body = $stdin.read()
# name = data_body.split('=')[1]
# tests = ""
cgi = CGI.new

cookie_string = cgi.cookies['cookie']
cookie = CGI::Cookie.parse(cookie_string)
sid = cookie['sess_id']

session = CGI::Session.new(cgi, 'database_manager' => CGI::Session::PStore)

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>Ruby Sessions</title>"
puts "</head>"
puts "<body>"

puts "<h1> Ruby Sessions Page 2</h1>"

if session['username'] and session['username'] != '' 
  puts "<p><b>Name:</b> %s" % session['username']
else
  puts "<p><b>Name:</b> You do not have a name set</p>"
end

puts session.session_id
puts "<br/>"
puts sid
puts cookie_string.class
puts cookie.class

puts "<br/><br/>"
puts "<a href=\"/cgi-bin/ruby-sessions-1.rb\">Session Page 1</a><br/>"
puts "<a href=\"/hw2/ruby-state-demo.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>"
puts "</html>"

session.close


# #!/usr/bin/perl
# use CGI;
# use CGI::Session;

# # print "Cache-Control: no-cache\n";

# # Access Perl Session
# use CGI::Session;

# # Create a new CGI Object
# $cgi = CGI->new;

# # Get the Session ID from the Cookie
# $sid = $cgi->cookie("CGISESSID") || undef;
# $session = new CGI::Session(undef, $cgi, {Directory=>'/tmp'});

# # Access Stored Data
# $name = $session->param("username");

# print "Content-Type: text/html\n\n";

# print "<html>";
# print "<head>";
# print "<title>Perl Sessions</title>";
# print "</head>";
# print "<body>";

# print "<h1>Perl Sessions Page 2</h1>";

# if ($name){
# 	print("<p><b>Name:</b> $name");
# }else{
# 	print "<p><b>Name:</b> You do not have a name set</p>";
# }
# print "<br/><br/>";
# print "<a href=\"/cgi-bin/perl-sessions-1.pl\">Session Page 1</a><br/>";
# print "<a href=\"/hw2/perl-cgiform.html\">Perl CGI Form</a><br />";
# print "<form style=\"margin-top:30px\" action=\"/cgi-bin/perl-destroy-session.pl\" method=\"get\">";
# print "<button type=\"submit\">Destroy Session</button>";
# print "</form>";

# print "</body>";
# print "</html>";



