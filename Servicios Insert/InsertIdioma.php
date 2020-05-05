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
$nombre_del_idioma = $_GET["nombre_del_idioma"];
$activo = $_GET["activo"];


$sql = "INSERT INTO Idioma(nombre_del_idioma, activo)
VALUES ('$nombre_del_idioma', '$activo')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje": "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje": "Operacion Erronea: '.$conn->error.'"}]';
}
$conn->close();
?> 