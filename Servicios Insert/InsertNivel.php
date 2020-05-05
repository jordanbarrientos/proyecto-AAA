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
$nombre = $_GET["nombre"];
$activo = $_GET["activo"];
$Tipo_Nivel = $_GET["Tipo_Nivel"];



$sql = "INSERT INTO Nivel(nombre, activo, Tipo_Nivel)
VALUES ('$nombre', '$activo' , '$Tipo_Nivel')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje": "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje": "Operacion Erronea: '.$conn->error.'"}]';
}

$conn->close();
?> 