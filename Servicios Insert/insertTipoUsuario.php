<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$descripcion = $_GET["descripcion"];
$activo = $_GET["activo"];

$sql = "INSERT INTO tipo_usuario 
        (descripcion,activo) 
        values 
        ('$descripcion','$activo')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?> 