<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$lugar_de_trabajo = $_GET["lugar_de_trabajo"];
$fecha_de_inicio = $_GET["fecha_de_inicio"];
$fecha_de_fin = $_GET["fecha_de_fin"];
$salario = $_GET["salario"];
$nombre_usuario=$_GET["nombre_usuario"];



$sql = "INSERT INTO experiencia_laboral(lugar_de_trabajo,fecha_de_inicio,fecha_de_fin,salario,nombre_usuario)
VALUES ('$lugar_de_trabajo','$fecha_de_inicio','$fecha_de_fin','$salario','$nombre_usuario')";



if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje": "Ingresado con Exito"}]';
} else {
    echo '[{"Mensaje": "error al insertar'.$conn->error.'"}]';
}

$conn->close();
?>
