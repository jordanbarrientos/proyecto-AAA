<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$Descripcion = $_GET["Descripcion"];
$Ruta = $_GET["Ruta"];
$Activo = $_GET["Activo"];
$sql = "INSERT INTO 
        objeto 
        (Descripcion,
        Ruta,
        Activo)
        VALUES 
        ('$Descripcion',
        '$Ruta',
        '$Activo')";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]'; 
}
$conn->close();

?> 