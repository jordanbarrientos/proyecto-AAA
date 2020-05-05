<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Coneccion Erronea: " . $conn->connect_error);
}

$nombre = $_GET["nombre"];
$activo = $_GET["activo"];
$buscar = $_GET["buscar"];

$sql = "UPDATE campus SET nombre='$nombre', activo='$activo' WHERE id_campus = '$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?> 