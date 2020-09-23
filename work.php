<?php
include "header.php";


$sql= " INSERT INTO student (student_ID, name, lastname, collegeyear, department, phone, address, email, Rec_id)
        VALUES ('{$d->student_ID}','{$d->name}','{$d->lastname}','{$d->collegeyear}','{$d->department}','{$d->phone}','{$d->address}','{$d->email}','');";

if($conn->query($sql) === TRUE){
    $sql="select * from student ";
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
