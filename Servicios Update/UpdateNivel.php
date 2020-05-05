<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$buscar = $_GET["buscar"];
$nombre = $_GET["nombre"];
$activo = $_GET["activo"];
$Tipo_Nivel = $_GET["Tipo_Nivel"];


$sql = "UPDATE Nivel SET nombre= '$nombre',activo= '$activo',Tipo_Nivel= '$Tipo_Nivel'
WHERE id_nivel = $buscar";


if ($conn->query($sql) === TRUE) {
    echo '[{Mensaje: "Operación Exitosa"}]';
} else {
    echo '[{Mensaje: "Operación Erronea: '.$conn->error.'"}]';
}

$conn->close();
?> 
