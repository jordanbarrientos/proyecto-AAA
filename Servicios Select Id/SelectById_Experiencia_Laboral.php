<?php
header('Content-type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aaa";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$id_experiencia=$_GET["id_experiencia"];
$sql = "SELECT  a.nombre_usuario,
				a.fecha_nacimiento,
				a.correo_electronico,
				b.lugar_de_trabajo,
                a.fecha_nacimiento,
                b.fecha_de_inicio,
                b.fecha_de_fin,
				b.saldo_devengado
		FROM 	usuario a INNER JOIN experiencia_laboral b ON a.nombre_usuario=b.nombre_usuario 
		WHERE id_experiencia='$id_experiencia'";

$result = $conn->query($sql);
$json = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

	  $json[] = array(
		'nombre_usuario'=>$row['nombre_usuario'],
		'fecha_nacimiento'=>$row['fecha_nacimiento'],
		'lugar_de_trabajo'=>$row['lugar_de_trabajo'],
		'fecha_nacimiento'=>$row['fecha_nacimiento'],
		'fecha_de_inicio'=>$row['fecha_de_inicio'],
		'correo_electronico'=>$row['correo_electronico'],
		'fecha_de_fin'=>$row['fecha_de_fin'],
		'saldo_devengado'=>$row['saldo_devengado']
    );
    }
}

$json_string =json_encode($json);
echo $json_string;
$conn->close();
?>
