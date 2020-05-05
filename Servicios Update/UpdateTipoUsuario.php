<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Coneccion Erronea: " . $conn->connect_error);
}

$buscar = $_GET["buscar"];
$descripcion = $_GET["descripcion"];
$activo= $_GET["activo"];


$sql = "UPDATE tipo_usuario SET activo= '$activo',descripcion='$descripcion' WHERE tipo_de_usuario = ' $buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?>