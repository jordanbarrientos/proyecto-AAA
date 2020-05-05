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
$id_carrera = $_GET["id_carrera"];
$nivel_de_grado = $_GET["nivel_de_grado"];
$fecha_de_inicio = $_GET["fecha_de_inicio"];
$fecha_de_fin = $_GET["fecha_de_fin"];
//$nombre_usuario = $_GET["nombre_usuario"];
$id_campus = $_GET["id_campus"];

$sql = "UPDATE educacion SET id_carrera='$id_carrera', nivel_de_grado='$nivel_de_grado', fecha_de_inicio= '$fecha_de_inicio', fecha_de_fin='$fecha_de_fin' , id_campus = ' $id_campus' WHERE  id_educacion = '$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?>