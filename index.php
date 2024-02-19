<?php
header('Content-Type: application/json');

$data=json_decode(file_get_contents("php://input"),true);
$firstname=$data['firstname'];
$lastname=$data['lastname'];
$middle=$data['middle'];

$conn=new mysqli('localhost','root', '', 'api');

$in=$conn->query("INSERT INTO ass(firstname,lastname,middle) values ('$firstname','$firstname','$middle')");

if($in)
{
    $id=$conn->insert_id;
    $row=$conn->query("SELECT * FROM ass where id=$id");
    $response=$row->fetch_assoc();
}
else
{
    echo json_encode([
        'message'=>'way klaro',
        'code'=>422,
    ]);
}
?>