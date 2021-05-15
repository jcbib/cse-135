#!/usr/bin/ruby

require "cgi"
cgi = CGI.new

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>GET Request Echo</title>"
puts "</head>"
puts "<body>"
puts "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>"

puts "<h1 align=center> GET Request Echo </h1>"
puts "<hr/>"

query = ENV['QUERY_STRING']
split_query = query.split('&')

puts "Raw query string: %s\n<br/><br/>" % query
puts "<table> Formatted Query String:"

for element in split_query do
  pair = element.split('=')
  puts "<tr><td> %s: </td><td> %s </td></tr>\n" % pair
end

puts "<script src=\"/collector.js\" async> </script>"

puts "</body>"
puts "</html>"
