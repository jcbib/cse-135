#!/usr/bin/ruby

require 'cgi'
require 'cgi/session'
require 'cgi/session/pstore'

cgi = CGI.new

session = CGI::Session.new(cgi, 'database_manager' => CGI::Session::PStore)

# Create a new Cookie from the Session ID
cookie = CGI::Cookie.new( 'name' => 'test_cookie',
                          'sess_id' => session.session_id
)

cgi.out("cookie" => cookie) { "string" }


if cgi.params.has_key?('username') and cgi.params['username'][0] != ''
  session['username'] = cgi.params['username']
elsif !session['username']
  session['username'] = ''
end

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>Ruby Sessions</title>"
puts "</head>"
puts "<body>"

puts "<h1> Ruby Sessions Page 1</h1>"

if session['username'] and session['username'] != '' 
  puts "<p><b>Name:</b> %s" % session['username']
else
  puts "<p><b>Name:</b> You do not have a name set</p>"
end

puts session.session_id
puts "<br/>"
puts session.session_id

puts "<br/><br/>"
puts "<a href=\"/cgi-bin/ruby-sessions-2.rb\">Session Page 2</a><br/>"
puts "<a href=\"/hw2/ruby-state-demo.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>"
puts "</html>"

session.close


# #!/usr/bin/perl
# use CGI;

# # Create a new Perl Session
# use CGI::Session;
# $session = new CGI::Session("driver:File", undef, {Directory=>"/tmp"});

# # Create CGI Object
# $cgi = CGI->new;

# # Create a new Cookie from the Session ID
# $cookie = $cgi->cookie(CGISESSID => $session->id);
# print $cgi->header( -cookie=>$cookie );

# #Store Data in that Perl Session
# my $name = $session->param('username') || $cgi->param('username');
# $session->param("username", $name);

# print "<html>";
# print "<head>";
# print "<title>Perl Sessions</title>";
# print "</head>";
# print "<body>";

# print "<h1>Perl Sessions Page 1</h1>";

# if ($name){
# 	print("<p><b>Name:</b> $name");
# }else{
# 	print "<p><b>Name:</b> You do not have a name set</p>";
# }
# print "<br/><br/>";
# print "<a href=\"/cgi-bin/perl-sessions-2.pl\">Session Page 2</a><br/>";
# print "<a href=\"/hw2/perl-cgiform.html\">Perl CGI Form</a><br />";
# print "<form style=\"margin-top:30px\" action=\"/cgi-bin/perl-destroy-session.pl\" method=\"get\">";
# print "<button type=\"submit\">Destroy Session</button>";
# print "</form>";

# print "</body>";
# print "</html>";



