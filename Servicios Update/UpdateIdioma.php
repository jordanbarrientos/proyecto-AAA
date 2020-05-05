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
$nombre_del_idioma = $_GET["nombre_del_idioma"];
$activo = $_GET["activo"];

$sql = "UPDATE idioma SET nombre_del_idioma= '$nombre_del_idioma',activo= '$activo'
WHERE id_idioma = '$buscar'";


if ($conn->query($sql) === TRUE) {
    echo '[{Mensaje: "Operación Exitosa"}]';
} else {
    echo '[{Mensaje: "Operación Erronea: '.$conn->error.'"}]';
}

$conn->close();
?>
