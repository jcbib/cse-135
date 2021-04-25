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

puts "<h1 align=center> GET Request Echo </h1>"
puts "<hr/>"

query = ENV['QUERY_STRING']
split_query = query.split('&')

for element in split_query do
  pair = element.split('=')
  puts "<tr><td> %s: </td><td> %s </td></tr>\n" % pair

puts "</body>"
puts "</html>"

# query = os.environ["QUERY_STRING"]
# split_query = query.split("&")

# for element in split_query:
#   pair = element.split("=")
#   if len(pair[1]) != 0:
#     print("<tr><td>{key}:</td><td>{value}</td></tr>\n".format(key=pair[0], value=pair[1]))




# print("</table>")
# print("</body>")
# print("</html>")