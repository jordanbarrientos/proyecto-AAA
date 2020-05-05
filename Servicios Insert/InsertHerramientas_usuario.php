<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id_herramientas = $_GET["id_herramientas"];
$nombre_usuario = $_GET["nombre_usuario"];
$id_nivel = $_GET["id_nivel"];


$sql = "INSERT INTO herramientas_de_usuario 
        (id_herramientas,nombre_usuario,id_nivel) 
        values 
        ('$id_herramientas','$nombre_usuario','$id_nivel')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();
?> 