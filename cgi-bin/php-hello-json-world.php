<?php

header("Cache-Control: no-cache");
header("Content-type: application/json");

$myObj->title = "Hello, PHP!";
$myObj->IP = $_SERVER['REMOTE_ADDR'];
$myObj->time = date("l M d H:i:s Y");
$myObj->heading = "Hello, PHP!";
$myObj->message = "This page was generated with the PHP!!!!! O_O :D";
$address = $ENV{REMOTE_ADDR};

$myJSON = json_encode($myObj, JSON_PRETTY_PRINT);

print $myJSON;
?>