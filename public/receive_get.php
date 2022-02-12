<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command="python3 exe_from_php.py";
exec($command,$output);

if(empty($_POST['text'])) {
    echo json_encode(
        [
           "error" => true,
           "message" => "Error: 入力してください。",
           "pythonout" => $output[0],
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['text'],
           "pythonout" => $output[0],
        ]
    ); 
}