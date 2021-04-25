#!/usr/bin/ruby

require "cgi"

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>General Request Echo</title>"
puts "</head>"
puts "<body>"

puts "<h1 align=center> General Request Echo </h1>"
puts "<hr/>"

data_body = $stdin.read()
split_body = data_body.split('&')
cgi = CGI.new

puts "<table>\n"

puts "<ul>\n"
puts "<tr><td>Protocol:</td><td>%s</td></tr>" % [ENV['SERVER_PROTOCOL']]
puts "<tr><td>Method:</td><td>%s</td></tr>" % [ENV['REQUEST_METHOD']]
puts "<tr><td>Query String:</td><td>%s</td></tr>" % [ENV['QUERY_STRING']]
puts "<tr><td>Message Body:</td><td>%s</td></tr>" % [data_body]

puts "</table>"
puts "</body>"
puts "</html>"
