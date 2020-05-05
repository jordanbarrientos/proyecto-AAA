<?php
header('Content-type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$Id=$_GET['Tipo_de_usuario'];
if ($Id==1) {
  $sql="SELECT a.tipo_de_usuario,b.Descripcion, b.Ruta FROM accesos a INNER JOIN objeto b ON a.Id_objeto = b.Id_objeto WHERE tipo_de_usuario=1 ORDER BY tipo_de_usuario ";
}else if($Id==2){
  $sql="SELECT a.tipo_de_usuario,b.Descripcion, b.Ruta FROM accesos a INNER JOIN objeto b ON a.Id_objeto = b.Id_objeto WHERE tipo_de_usuario=2 ORDER BY tipo_de_usuario ";
}

$result=$conn->query($sql);
$datos = array();
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

	  $datos[]=$row;
    }
}

echo json_encode($datos);

$conn->close();





 ?>
