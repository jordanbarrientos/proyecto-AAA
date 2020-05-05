<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$IdSesion = $_GET["IdSesion"];

$sql = "UPDATE sesion  SET  FechaFin = NOW() WHERE IdSesion = '$IdSesion'";


if ($conn->query($sql) === TRUE) {
    header('Location: ../Formularios/InicioSesion.html');
} else {
    header('Location: ../Formularios/InicioSesion.html');
}
$conn->close();

?> 
