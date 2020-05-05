<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nombre_usuario = $_GET["nombre_usuario"];
$identidad = $_GET["identidad"];
$nombre = $_GET["nombre"];
//$foto = $_GET["foto"];
//$hoja_de_vida = $_GET["hoja_de_vida"];
$fecha_nacimiento = $_GET["fecha_nacimiento"];
$correo_electronico = $_GET["correo_electronico"];
$sexo = $_GET["sexo"];
$expectativa_salarial = $_GET["expectativa_salarial"];
$Tipo_de_usuario = $_GET["Tipo_de_usuario"];        
$contrasena = $_GET["contrasena"];  
$sql = "INSERT INTO usuario
        (nombre_usuario, 
        identidad,	
        nombre,		
        fecha_nacimiento, 
        correo_electronico, 
        sexo, 
        expectativa_salarial,
        Tipo_de_usuario, 
        contrasena)
        values 
        ('$nombre_usuario',
        '$identidad','$nombre',
        '$fecha_nacimiento',
        '$correo_electronico',
        '$sexo',
        '$expectativa_salarial',
        '$Tipo_de_usuario',
        '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?>
