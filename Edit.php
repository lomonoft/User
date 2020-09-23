<?php
/*header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
$d = json_decode(file_get_contents("php://input"));*/
include "header.php";

$sql = "UPDATE student SET 
        student_ID = '{$d->student_ID}', 
        name = '{$d->name}', 
        lastname = '{$d->lastname}',  
        collegeyear = '{$d->collegeyear}', 
        department = '{$d->department}', 
        phone = '{$d->phone}', 
        address = '{$d->address}', 
        email '{$d->email}',
        WHERE student.Rec_id = '{$d->Rec_id}'; ";

if($conn->query($sql) === TRUE){
    $sql="select * from student";
    $result=$conn->query($sql);
    $row=array();
        while($r=mysqli_fetch_assoc($result)){
            $row[]=$r;
        }
        print json_encode($row);
}else{
        echo "Error: ".$sql."<br>".$conn->error;
}
$conn->close();

?>
