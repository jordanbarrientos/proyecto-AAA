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
$descripcion = $_GET['descripcion'];
$activo = $_GET['activo'];


$sql = "UPDATE herramientas SET descripcion='$descripcion', activo='$activo'  WHERE  id_herramientas='$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?>