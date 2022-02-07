<?php
//---------------------------------------------------
// DBに接続する
//---------------------------------------------------
function getConnection() {
    $server   = "mysql201.phy.lolipop.lan";              // 実際の接続値に置き換える
    $user     = "LAA1395778";                           // 実際の接続値に置き換える
    $pass     = "test01test01";                           // 実際の接続値に置き換える
    $database = "LAA1395778-test01";                      // 実際の接続値に置き換える
 
    //-------------------
    //DBに接続
    //-------------------
    $conn = mysql_connect( $server, $user, $pass );
    if (!$conn) {
        echo (mysql_error());
    } else {
        echo ("connection success");
    }
    mysql_set_charset( 'utf8', $conn );
 
    //-------------------
    // データベース選択
    //-------------------
    mysql_select_db( $database, $conn );
 
    return $conn;
}
 
//---------------------------------------------------
// SQLを実行する
//---------------------------------------------------
function execute( $conn, $sql ) {
    $result = mysql_query( $sql, $conn );
 
    //データ取得
    mysql_data_seek( $result, 0 );
    return mysql_fetch_array( $result, MYSQL_ASSOC );
}
 
function testMain() {
    //sql実行
    $conn = getConnection() ;
    $sql  = "select * from test";
 
    $rset = execute( $conn, $sql );
    echo $rset;
    return $rset;
}
