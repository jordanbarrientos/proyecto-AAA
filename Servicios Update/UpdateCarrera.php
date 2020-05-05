<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$buscar = $_GET["buscar"];
$nombre_carrera = $_GET["nombre_carrera"];
$activo = $_GET["activo"];		
$sql = "UPDATE carrera SET  nombre_carrera = '$nombre_carrera', 
                            activo= '$activo' 
                            WHERE id_carrera='$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?> 