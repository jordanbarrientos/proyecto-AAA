<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    
$nombre = $_GET["nombre"];
$activo = $_GET["activo"];

$sql = "INSERT INTO campus ( nombre, activo)
VALUES ('$nombre', '$activo') ";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":"Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":"Operacion Erronea: '.$conn->error.'"}]'; 
}

$conn->close();
?> 



