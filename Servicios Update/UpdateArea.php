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
$nombre_area= $_GET["nombre_area"];
$activo= $_GET["activo"];
$sql = "UPDATE area SET nombre_area='$nombre_area',activo= '$activo' WHERE id_area ='$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{Mensaje:  "Operacion Exitosa"}]';
} else {
    echo '[{Mensaje:  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?>