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

puts "HI"

puts "</body>"
puts "</html>"

# print("<html>")
# print("<head>")
# print("<title> Environment Variables </title>")
# print("</head>")

# print("<body>")
# print("<h1 align=center> Environment Variables </h1>")
# print("<hr/>")

# for param in os.environ.keys():
#    print ("<b>{}</b>: {}<br/>".format(param, os.environ[param]))

# print("</body>")
# print("</html>")