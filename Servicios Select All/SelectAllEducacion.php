<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Coneccion Erronea: " . $conn->connect_error);
}

$nombre_usuario = $_GET["nombre_usuario"];
$sql = "SELECT a.id_educacion,b.nombre,a.fecha_de_inicio,a.fecha_de_fin,a.nombre_usuario,c.nombre,d.nombre_carrera
FROM educacion a INNER JOIN nivel b ON a.nivel_de_grado=b.id_nivel
INNER JOIN campus c ON a.id_campus=c.id_campus
INNER JOIN carrera d ON a.id_carrera=d.id_carrera where nombre_usuario= '$nombre_usuario' " ;


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
