<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "aaa";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexion fallida". $conn->connect_error);
}

$sql = "SELECT * FROM carrera " ;

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