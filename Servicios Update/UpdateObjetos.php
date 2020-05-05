<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$buscar = $_GET["buscar"];
$Ruta= $_GET["Ruta"];
$Descripcion= $_GET["Descripcion"];
$Activo = $_GET["Activo"];
$sql = "UPDATE objeto SET Ruta='$Ruta', 
               Descripcion='$Descripcion',
               Activo = '$Activo'
               WHERE Id_objeto= '$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?> 