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

if(empty($_POST['id'])) {
    echo json_encode(
        [
           "error" => true,
           "message" => "Error: 入力してください。",
           "pythonout" => $output2,
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['id'],
           "pythonout" => $output2,
        ]
    ); 
}