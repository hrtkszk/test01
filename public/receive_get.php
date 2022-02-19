<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command="python3 exe_from_php.py ".$_POST['id'];
exec($command,$output);
$output1=trim($output[0],'"');

// $outputarray=array();
// foreach ($output as &$eachoutput) {
//     array_push($outputarray,json_encode($eachoutput));
// }
$output2=json_encode($output1);

$json = json_decode($output2);
if (is_array($json) === true) {
	$message2 = 'JSONです';
} else {
    $message2 = 'JSONではありません';
}

if(empty($_POST['id'])) {
    echo json_encode(
        [
           "error" => true,
           "message" => "Error: 入力してください。",
           "message2" => $message2,
           "pythonout" => $output2,
           "pythonouttype" => gettype($output[0]),
           "pythonout0" => $output[0],
           "pythonout1" => $output1,
           "json_encode_type" => gettype($output2),
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['id'],
           "message2" => $message2,
           "pythonout" => $output2,
           "pythonouttype" => gettype($output[0]),
           "pythonout0" => $output[0],
           "pythonout1" => $output1,
           "json_encode_type" => gettype($output2),
        ]
    ); 
}