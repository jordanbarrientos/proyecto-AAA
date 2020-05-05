<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id_area=$_GET['id_area'];
$sql = "SELECT * FROM area WHERE id_area='$id_area'" ;

$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = array(
    'nombre_area'=>$row['nombre_area'],
    'activo'=>$row['activo'],
    );
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();

 ?>