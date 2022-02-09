<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$server   = "mysql201.phy.lolipop.lan:3306";              // 実際の接続値に置き換える
$user     = "LAA1395778";                           // 実際の接続値に置き換える
$pass     = "test01test01";                           // 実際の接続値に置き換える
$database = "LAA1395778-test01";                      // 実際の接続値に置き換える

//-------------------
//DBに接続
//-------------------
$link = mysql_connect( $server, $user, $pass );
echo json_encode(
    [
       "error" => true,
       "message" => "Success",
    ]
); 
mysql_close($link);
