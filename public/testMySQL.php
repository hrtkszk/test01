<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$link = mysql_connect('mysql201.phy.lolipop.lan:3306', 'LAA1395778', 'test01test01');
if (!$link) {
    print(mysql_error());
} else {
    print("success");
}
mysql_close($link);