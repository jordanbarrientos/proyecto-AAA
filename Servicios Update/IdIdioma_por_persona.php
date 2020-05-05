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
$sql = "SELECT * FROM idioma_por_persona WHERE id_relacion=$id" ;

$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = array(
    'nombre_usuario'=>$row['nombre_usuario'],
    'activo'=>$row['activo'],
    'id_idioma'=>$row['id_idioma'],
    'id_nivel'=>$row['id_nivel'],
    );
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();

 ?>
