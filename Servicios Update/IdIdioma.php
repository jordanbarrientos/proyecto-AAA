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
$sql = "SELECT * FROM idioma WHERE id_idioma=$id" ;

$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = array(
    'nombre_del_idioma'=>$row['nombre_del_idioma'],
    'activo'=>$row['activo'],
    );
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();

 ?>
