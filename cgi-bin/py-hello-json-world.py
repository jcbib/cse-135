#!/usr/bin/python3.8

#!/usr/bin/python3.8
from datetime import datetime
import os

print("Content-type: application/json\r\n\r\n")

dt_string = datetime.now().strftime("%A %B %d %H:%M:%S %Y")
address = os.environ['REMOTE_ADDR']

print("{")
print("\t\"title\": \"Hello, Python!\",")
print("\"IP\": \"{}\",".format(address))
print("\"time\": \"{}\",".format(dt_string))
print("\"heading\": \"Hello, Python!\",")
print("\"message\": \"This page was generated with Python! :D\"")
print("}")