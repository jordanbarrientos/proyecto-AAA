<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "SELECT * FROM herramientas";
$result = $conn->query($sql);
$datos = array();

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        $datos [] = $row;
    }
} else {
    echo "0 results";
}

echo json_encode($datos);
$conn->close();
?>