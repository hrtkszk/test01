<html>
<head>
    <title>PHP Test</title>
</head>
<body>
    こんにちは、今日の日付は、「<?php echo date("Y/m/d");?>」です。
    <?php
    $command="python exe_from_php.py";
    exec($command,$output);
    print "$output[0]\n";
    print "$output[1]\n";
    ?>
</body>
</html>