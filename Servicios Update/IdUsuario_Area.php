<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id=$_GET['Id'];
$nombre_usuario=$_GET['nombre_usuario'];
$sql = "SELECT * FROM usuario_area WHERE id_relacion=$id and nombre_usuario='$nombre_usuario'" ;

$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = array(
    'id_area'=>$row['id_area'],
    );
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();

 ?>