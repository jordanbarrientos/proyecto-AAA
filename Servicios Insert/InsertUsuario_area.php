<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";



$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id_area = $_GET["id_area"];
$nombre_usuario= $_GET["nombre_usuario"];


$sql = "INSERT INTO usuario_area (id_area, nombre_usuario)
VALUES ('$id_area', '$nombre_usuario')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":"Operacion existosa"}]';
 } else {
     echo '[{"Mensaje":"Operacion Erronea: '.$conn->error.' "}]' ;
 }

$conn->close();
?> 