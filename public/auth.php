<?php
echo "User: ".$_SERVER['PHP_AUTH_USER'];
echo "<br/>";
echo "Pass: ".$_SERVER['PHP_AUTH_PW'];

switch (true) {
    case !isset($_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']):
    case $_SERVER['PHP_AUTH_USER'] !== 'admin':
    case $_SERVER['PHP_AUTH_PW']   !== 'test':
        header('WWW-Authenticate: Basic realm="Enter username and password."');
        header('Content-Type: text/plain; charset=utf-8');
        die('このページを見るにはログインが必要です');
}

header('Content-Type: text/html; charset=utf-8');

?>
<!DOCTYPE html>
<html>
<head><title>PHP TEST</title></head>
<body>

<p>ようこそ、会員向けページへ</p>

</body>
</html>