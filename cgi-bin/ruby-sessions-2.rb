#!/usr/bin/ruby

require 'cgi'
require 'cgi/session'
require 'cgi/session/pstore'

cgi = CGI.new


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

puts "<br/><br/>"
puts "<a href=\"/cgi-bin/ruby-sessions-1.rb\">Session Page 1</a><br/>"
puts "<a href=\"/hw2/ruby-state-demo.html\">Ruby CGI Form</a><br />"
puts "<form style=\"margin-top:30px\" action=\"/cgi-bin/ruby-destroy-session.rb\" method=\"get\">"
puts "<button type=\"submit\">Destroy Session</button>"
puts "</form>"

puts "</body>"
puts "</html>"

session.close
