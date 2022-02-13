<?php
$user = 'admin';
$password = 'pass';

if (!isset($_SERVER['REMOTE_USER'])){
    header('WWW-Authenticate: Basic realm="Private Page"');
    header('HTTP/1.0 401 Unauthorized');

    echo(var_dump($_SERVER));

    die('このページを見るにはログインが必要です。isset');
    exit;
}else{
    if ($_SERVER['REMOTE_USER'] != $user
        || $_SERVER['REMOTE_PW'] != $password){

        header('WWW-Authenticate: Basic realm="Private Page"');
        header('HTTP/1.0 401 Unauthorized');

        echo(var_dump($_SERVER));
        
        die('このページを見るにはログインが必要です。authlogic');
        exit;
    }
}

?>

<html>
<head><title>PHP TEST</title></head>
<body>

<p>ようこそ、会員向けページへ</p>

</body>
</html>