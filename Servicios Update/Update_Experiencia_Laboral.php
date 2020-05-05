<?php
header('Content-Type: application/json');
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
$buscar = $_GET["buscar"];
$lugar_de_trabajo = $_GET["lugar_de_trabajo"];
$fecha_de_inicio = $_GET["fecha_de_inicio"];
$fecha_de_fin = $_GET["fecha_de_fin"];
$salario = $_GET["salario"];




$sql = "UPDATE experiencia_laboral SET lugar_de_trabajo='$lugar_de_trabajo', fecha_de_inicio='$fecha_de_inicio',fecha_de_fin='$fecha_de_fin',salario='$salario'WHERE id_experiencia = '$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{Mensaje:  "Operacion Exitosa"}]';
} else {
    echo '[{Mensaje:  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?>
