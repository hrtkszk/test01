<?php
$link = mysql_connect('mysql201.phy.lolipop.lan:3306', 'LAA1395778', 'test01test01');
if (!$link) {
    echo (mysql_error());
} else {
    echo ("success");
}
mysql_close($link);