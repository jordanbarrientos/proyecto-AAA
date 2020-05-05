<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$nombre_usuario = $_GET["nombre_usuario"];

$sql = "INSERT INTO sesion (nombre_usuario,FechaInicio)
VALUES ('$nombre_usuario', now())";


if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje": "'.$conn->insert_id.'"}]';
} else {
    echo '[{"Mensaje": "error al insertar'.$conn->error.'"}]';
}
$conn->close();
?>
