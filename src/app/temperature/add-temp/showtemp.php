<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Headers:*');

$cn=mysqli_connect('localhost','root','','temp');
$q="SELECT * FROM temptable";
$rs=mysqli_query($cn,$q);
while($data=mysqli_fetch_assoc($rs)){
    $tempa[]=$data;

}
echo json_encode($tempa);



?>