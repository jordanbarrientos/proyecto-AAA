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


$nombre_usuario=$_GET['nombre_usuario'];

$sql = "SELECT usuario.nombre_usuario, usuario.identidad, usuario.nombre, usuario.fecha_nacimiento, usuario.correo_electronico, usuario.sexo, usuario.expectativa_salarial, usuario.Tipo_de_usuario, usuario.contrasena FROM usuario WHERE nombre_usuario='$nombre_usuario'" ;
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