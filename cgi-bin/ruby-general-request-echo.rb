#!/usr/bin/ruby

require "cgi"

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>General Request Echo</title>"
puts "</head>"
puts "<body>"
puts "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>"

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

puts "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>"
puts "<noscript><img src=\"/nojs.php\"></noscript>"
puts "<script src=\"/collector.js\" async> </script>"

puts "</body>"
puts "</html>"
