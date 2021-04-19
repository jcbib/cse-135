#!/usr/bin/python3.8

#!/usr/bin/python3.8
from datetime import datetime
import os

print("Content-type: application/json\r\n\r\n")
print("{")

print("\t\"message\": \"Hello, Python!\",")
# print("<p>This page was generated with Python! :D</p>")

# dt_string = datetime.now().strftime("%A %B %d %H:%M:%S %Y")
# print("<p>Current Time: {}</p>".format(dt_string))

# # IP Address is an environment variable when using CGI
# address = os.environ['REMOTE_ADDR']
# print("<p>Your IP Address: {}</p>".format(address))

# print("</body>")
# print("</html>")
print("}")