#!/usr/bin/ruby

require 'cgi'
require 'cgi/session'

data_body = $stdin.read()
cgi = CGI.new

session = CGI::Session.new(cgi, 
  'database_manager' => CGI::Session::Pstore,
  'session_key' => '_rb_sess_id',
  'prefix' => 'pstore_sid_')

if cgi.has_key?('user_name') and cgi['user_name'] != ''
  session['user_name'] = cgi['user_name'].to_s

elsif !session['user_name']
  session['user_name'] = data_body.split('=')[1]

end

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>General Request Echo</title>"
puts "</head>"
puts "<body>"

puts "<h1> Ruby Sessions Page 1</h1>"

if session['user_name'] and session['user_name'] != '' 
  puts "<p><b>Name:</b> %s" % session['user_name']
else
  puts "<p><b>Name:</b> You do not have a name set</p>"
end

puts "<br/><br/>"
puts "<a href=\"/cgi-bin/ruby-sessions-2.rb\">Session Page 2</a><br/>"
puts "<a href=\"/hw2/ruby-state-demo.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>"
puts "</html>"

session.close


# header("Cache-Control: no-cache");
#   header("Content-type: text/html");

#   print "<!DOCTYPE html>";
#   print "<html>";
#   print "<head>";
#   print "<title>PHP Sessions</title>";
#   print "</head>";
#   print "<body>";

#   print "<h1>PHP Sessions Page 1</h1>";

#   if ($name){
#     print("<p><b>Name:</b> $name");
#   }else{
#     print "<p><b>Name:</b> You do not have a name set</p>";
#   }
#   print "<br/><br/>";
#   print "<a href=\"/cgi-bin/php-sessions-2.php\">Session Page 2</a><br/>";
#   print "<a href=\"/hw2/php-state-demo.html\">PHP CGI Form</a><br />";
#   print "<form style=\"margin-top:30px\" action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
#   print "<button type=\"submit\">Destroy Session</button>";
#   print "</form>";

#   print "</body>";
#   print "</html>";
