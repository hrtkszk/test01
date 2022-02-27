<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command="python3 exe_from_php.py ".$_POST['id'];
exec($command,$output);

$output0=str_replace("'",'"',$output[0]);
if (is_array($output0) === true) {
	$message0 = 'JSONです';
} else {
    $message0 = 'JSONではありません';
}

// $outputarray=array();
// foreach ($output as &$eachoutput) {
//     array_push($outputarray,json_encode($eachoutput));
// }
$output1=trim($output0,'"');
if (is_array($output1) === true) {
	$message1 = 'JSONです';
} else {
    $message1 = 'JSONではありません';
}

$output2=json_encode($output1);
if (is_array($output2) === true) {
	$message2 = 'JSONです';
} else {
    $message2 = 'JSONではありません';
}

$output3=str_replace("'",'',$output[0]);
$output4=str_replace(", ",'&',$output3);
$output5=str_replace(": ",'=',$output4);
$output6=trim($output5,'"');
$output7=trim($output6,"{'");
$output8=trim($output7,'}');
parse_str($output7, $output8);
// $output9 = json_encode($output8);
if (is_array($output8) === true) {
	$message8 = 'JSONです';
} else {
    $message8 = 'JSONではありません';
}


// $pieces = explode(":", $output1);
// $keywords = preg_split("/[\s,]+/", "hypertext language, programming");

// $json = json_decode($output2);
// $json1 = array('foo' => 'bar', 'baz' => 'long');
// $json2 = json_encode($json1);
// if (is_array($json1) === true) {
// 	$message2 = 'JSONです';
// } else {
//     $message2 = 'JSONではありません';
// }



if(empty($_POST['id'])) {
    echo json_encode(
        [
           "error" => true,
           "message" => "Error: 入力してください。",
           "pythonout" => $output[0],
           "pythonout_type" => gettype($output[0]),
           "pythonout0" => $output0,
           "pythonout0_is_array" => $message0,
           "pythonout0_type" => gettype($output0),
           "pythonout1" => $output1,
           "pythonout1_is_array" => $message1,
           "pythonout1_type" => gettype($output1),
           "pythonout2" => $output2,
           "pythonout2_is_array" => $message2,
           "pythonout2_type" => gettype($output2),
           "pythonout8" => $output8,
           "pythonout8_is_array" => $message8,
           "pythonout8_type" => gettype($output8),
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['id'],
           "pythonout" => $output[0],
           "pythonout_type" => gettype($output[0]),
           "pythonout0" => $output0,
           "pythonout0_is_array" => $message0,
           "pythonout0_type" => gettype($output0),
           "pythonout1" => $output1,
           "pythonout1_is_array" => $message1,
           "pythonout1_type" => gettype($output1),
           "pythonout2" => $output2,
           "pythonout2_is_array" => $message2,
           "pythonout2_type" => gettype($output2),
           "pythonout8" => $output8,
           "pythonout8_is_array" => $message8,
           "pythonout8_type" => gettype($output8),
        ]
    ); 
}