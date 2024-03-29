#!/usr/bin/ruby

require "cgi"

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>POST Request Echo</title>"
puts "</head>"
puts "<body>"
puts "<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>"

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

puts "<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>"
puts "<noscript><img src=\"/nojs.php\"></noscript>"
puts "<script src=\"/collector.js\" async> </script>"

puts "</body>"
puts "</html>"
