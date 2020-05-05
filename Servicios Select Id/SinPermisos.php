<?php
header('Content-type: application/json');
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


$id_Sesion =$_GET["id_Sesion"];

$sql = "SELECT count(1) valido, IdSesion,FechaFin
FROM sesion
WHERE IdSesion ='$id_Sesion'
			";

$result = $conn->query($sql);
$datos = array();
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

	  $datos[] = $row;
    }

}
$json_string =json_encode($datos);
echo $json_string;
$conn->close();


?>
