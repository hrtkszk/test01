<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード
$command="python3 exe_from_php.py ".$_POST['id'];
exec($command,$output);

$output2 = array_combine($output[0],$output[1]);

// $outputarray=array();
// foreach ($output as &$eachoutput) {
//     array_push($outputarray,json_encode($eachoutput));
// }


$output3=str_replace("': ",'=',$output[0]);
$output4=str_replace(", '",'&',$output3);
$output5=str_replace("'",'',$output4);
$output6=trim($output5,'"');
$output7=trim($output6,"{");
$output8=trim($output7,"}");
parse_str($output8, $output9);
// $output9 = json_encode($output8);
if (is_array($output9) === true) {
	$message9 = 'JSONです';
} else {
    $message9 = 'JSONではありません';
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
           "pythonout0" => $output[0],
           "pythonout0_type" => gettype($output[0]),
           "pythonout1" => $output[1],
           "pythonout1_type" => gettype($output[1]),
           "pythonout2" => $output2,
           "pythonout2_type" => gettype($output2),
        //    "pythonout9" => $output9,
        //    "pythonout9_is_array" => $message9,
        //    "pythonout9_type" => gettype($output9),
        //    "pythonout9_ID" => $output9['ID'],
        ]
    ); 
} else {
    echo json_encode(
        [
           "error" => false,
           "message" => 'Success: 入力されたテキスト→'.$_POST['id'],
           "pythonout0" => $output[0],
           "pythonout0_type" => gettype($output[0]),
           "pythonout1" => $output[1],
           "pythonout1_type" => gettype($output[1]),
           "pythonout2" => $output2,
           "pythonout2_type" => gettype($output2),
        //    "pythonout9" => $output9,
        //    "pythonout9_is_array" => $message9,
        //    "pythonout9_type" => gettype($output9),
        //    "pythonout9_ID" => $output9['ID'],
        ]
    ); 
}