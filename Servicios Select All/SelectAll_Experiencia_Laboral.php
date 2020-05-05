<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexion fallida". $conn->connect_error);
}

$nombre_usuario=$_GET["nombre_usuario"];
$sql = "SELECT * FROM experiencia_laboral WHERE nombre_usuario='$nombre_usuario'";

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