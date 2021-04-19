#!/usr/bin/python3.8
from datetime import datetime
import os

print("Cache-Control: no-cache")
print("Content-type: application/json\r\n\r\n")

dt_string = datetime.now().strftime("%A %B %d %H:%M:%S %Y")
address = os.environ['REMOTE_ADDR']

print("{")
print("\t\"title\": \"Hello, Python!\",")
print("\t\"IP\": \"{}\",".format(address))
print("\t\"time\": \"{}\",".format(dt_string))
print("\t\"heading\": \"Hello, Python!\",")
print("\t\"message\": \"This page was generated with Python! :D\"")
print("}")