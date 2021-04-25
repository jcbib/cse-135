#!/usr/bin/ruby

require "cgi"
cgi = CGI.new

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>Environment Variables</title>"
puts "</head>"
puts "<body>"

puts "<h1 align=center> Environment Variables </h1>"
puts "<hr/>"

ENV.each do |key, value|
  puts "<b>%s</b>: %s<br/>" % [key, value]
end 

puts "</body>"
puts "</html>"