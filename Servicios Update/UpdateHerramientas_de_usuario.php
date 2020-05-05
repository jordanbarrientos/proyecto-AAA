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
$id_herramientas = $_GET['id_herramientas'];
$id_nivel = $_GET['id_nivel'];


$sql = "UPDATE herramientas_de_usuario SET id_herramientas='$id_herramientas',id_nivel='$id_nivel'  WHERE id_relacion='$buscar'";

if ($conn->query($sql) === TRUE) {
    echo '[{"Mensaje":  "Operacion Exitosa"}]';
} else {
    echo '[{"Mensaje":  "Operacion Erronea:  '. $conn->error.'"}]';
}
$conn->close();
?>
