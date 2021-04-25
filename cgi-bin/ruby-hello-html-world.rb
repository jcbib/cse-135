#!/usr/bin/ruby

require "cgi"
cgi = CGI.new

puts "Cache-Control: no-cache"
puts "Content-type: text/html\n\n"

puts "<html>"
puts "<head>"
puts "<title>Hello, Ruby!</title>"
puts "</head>"
puts "<body>"

puts "<h1>Hello, Ruby!</h1>"
puts "<p>This do be generated by Ruby o-o.</p>"

dt_string = Time.now.inspect
puts "<p>Current Time: " + dt_string + "</p>"

# IP Address is an environment variable when using CGI
address = cgi.remote_addr
puts "<p>Your IP Address: %s</p>" % [address]

puts "</body>"
puts "</html>"

# print("Cache-Control: no-cache")
# print("Content-type: text/html\r\n\r\n")
# print("<html>")
# print("<head>")
# print("<title>Hello, Python!</title>")
# print("</head>")
# print("<body>")

# print("<h1>Hello, Python!</h1>")
# print("<p>This page was generated with Python! :D</p>")

# dt_string = datetime.now().strftime("%A %B %d %H:%M:%S %Y")
# print("<p>Current Time: {}</p>".format(dt_string))

# # IP Address is an environment variable when using CGI
# address = os.environ['REMOTE_ADDR']
# print("<p>Your IP Address: {}</p>".format(address))

# print("</body>")
# print("</html>")