<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Coneccion Erronea: ". $conn->connect_error);
}

$id_educacion = $_GET["id_educacion"];
$nombre_usuario=$_GET['nombre_usuario'];
$sql = "SELECT * FROM educacion WHERE id_educacion =$id_educacion and nombre_usuario='$nombre_usuario'" ;
$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = $row;
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();
?>           

