#!/usr/bin/ruby

require "cgi"

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>POST Request Echo</title>"
puts "</head>"
puts "<body>"

puts "<h1 align=center> POST Request Echo </h1>"
puts "<hr/>"

data_body = $stdin.read()
split_body = data_body.split('&')
cgi = CGI.new

puts "<b>Message Body:</b><br/>\n"

puts "<ul>\n"

for element in split_body do
  pair = element.split('=')
  puts "<li>%s = %s</li>\n" % pair
end

puts "</ul>"
puts "</body>"
puts "</html>"
