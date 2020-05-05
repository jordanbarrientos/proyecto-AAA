<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$result = mysql_query("SELECT 
 area.id_area,
  area.nombre_area,
  FROM area 
  INNER JOIN area ON area.id_area= area.nombre_area
  ");

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
