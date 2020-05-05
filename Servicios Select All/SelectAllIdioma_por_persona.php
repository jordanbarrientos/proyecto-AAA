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

$nombre= $_GET["nombre_usuario"];

$sql = "SELECT a.id_relacion,a.nombre_usuario,c.nombre_del_idioma,b.nombre,b.activo
FROM idioma_por_persona a 
INNER JOIN idioma c ON a.id_idioma=c.id_idioma
INNER JOIN nivel b ON a.id_nivel= b.id_nivel WHERE nombre_usuario='$nombre'
ORDER BY a.id_relacion" ;


$result = $conn->query($sql);
$Datos = array();
if ($result->num_rows > 0) {
 while($row = $result->fetch_assoc()) {
    $Datos [] =$row;
    }
}

echo json_encode($Datos);

$conn->close();

?>
