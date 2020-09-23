<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$d = json_decode(file_get_contents("php://input"));

include_once("connect.php");

$sql = "select * from student";
    $result = $conn->query($sql);
    $row = array();
        while($r = mysqli_fetch_assoc($result)){
            $row[] = $r;
        }
        print json_encode($row);
$conn->close();
?>