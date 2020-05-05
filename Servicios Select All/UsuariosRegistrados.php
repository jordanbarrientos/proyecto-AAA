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
$idioma = $_GET["idioma"];
$nivel_idioma = $_GET["nivel_idioma"];
$carrera = $_GET["carrera"];
$campus = $_GET["campus"];
$area_interes = $_GET["area_interes"];
$herramientas = $_GET["herramientas"];
$nivel_herramientas = $_GET["nivel_herramientas"];
$salario_inicial = $_GET["salario_inicial"];
$salario_final = $_GET["salario_final"];




$sql = "SELECT nombre_usuario, identidad, nombre, fecha_nacimiento, correo_electronico, sexo, expectativa_salarial, hoja_de_vida FROM usuario a 
where exists (select * from idioma_por_persona b where a.nombre_usuario=b.nombre_usuario and b.id_idioma = '$idioma' and b.id_nivel = '$nivel_idioma')
or exists (select * from herramientas_de_usuario c where a.nombre_usuario = c.nombre_usuario and c.id_herramientas = '$herramientas' and c.id_nivel = '$nivel_herramientas')
or exists (select * from educacion d where a.nombre_usuario=d.nombre_usuario and d.id_campus ='$campus' and d.id_carrera='$carrera')
or exists (select * from usuario_area e where e.nombre_usuario=e.nombre_usuario and e.id_area = '$area_interes' )
and expectativa_salarial between '$salario_inicial' and '$salario_final'
 and tipo_de_usuario = 1
 ";

$result = $conn->query($sql);
$json = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {

        
        array_push($json,array(
            "nombre_usuario"=>$row['nombre_usuario'],
            "identidad"=>$row['identidad'],
            "nombre"=>$row['nombre'],
            "fecha_nacimiento"=>$row['fecha_nacimiento'],
            "correo_electronico"=>$row['correo_electronico'],
            "sexo"=>$row['sexo'],
            "expectativa_salarial"=>$row['expectativa_salarial'],
            "hoja_de_vida"=>base64_encode($row["hoja_de_vida"])
        ));
	
    }
}
echo json_encode($json);
$conn->close();
?>
