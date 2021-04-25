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
puts "<tr><td><b>Protocol:</b></td><td>%s</td></tr>" % [ENV['SERVER_PROTOCOL']]
puts "<tr><td><b>Method:</b></td><td>%s</td></tr>" % [ENV['REQUEST_METHOD']]
puts "<tr><td><b>Query String:</b></td><td>%s</td></tr>" % [ENV['QUERY_STRING']]
puts "<tr><td><b>Message Body:</b></td><td>%s</td></tr>" % [data_body]

puts "</table>"
puts "</body>"
puts "</html>"
