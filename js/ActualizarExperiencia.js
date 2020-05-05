function Actualizar() {

  $.ajaxSetup({

    async: false

  });
  
  const datos = {
    nombre_usuario: $('#nombre_usuario').val(),
    lugar_de_trabajo: $('#lugar_de_trabajo').val(),
    fecha_de_inicio: $('#fecha_de_inicio').val(),
    fecha_de_fin: $('#fecha_de_fin').val(),
    salario: $('#salario').val(),
    buscar: $('#IdBuscar').val(),

  }

  var nombre_usuario = $('#nombre_usuario').val();
  var lugar_de_trabajo = $('#lugar_de_trabajo').val();
  var fech_Inicio = $('#fecha_de_inicio').val();
  var fech_fin = $('#fecha_de_fin').val();
  var sal = $('#salario').val();
  var buscar = $('#IdBuscar').val();
  if (nombre_usuario == "") {
    alert("Complete el campo");
  } else {
    $.ajax({
      type: "GET",
      url: "../Servicios Update/Update_Experiencia_Laboral.php",
      data: datos,
      success: function (r) {
        console.log(buscar);
        alert("actualización exitosa");
      }
    });
  }
  $('#form_insertar').trigger('reset');

  ReporteFormulario();
}
function ReporteFormulario() {

  $.ajaxSetup({

    async: false

  });

  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
  var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAll_Experiencia_Laboral.php?nombre_usuario="+nombre_usuario; //aqui va llamar el select all de las tablas que le tocaron
  var htmlTabla = "<thead><tr><th>Id Experiencia</th><th>Lugar de trabajo</th><th>Fecha de Inicio</th><th>Fecha Fin</th><th>Salario</th></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
  $.getJSON(url, function (data) {
    $.each(data, function (key, value) {
      htmlTabla = htmlTabla + "<tr>";
      htmlTabla = htmlTabla + "<td>" + value["id_experiencia"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["lugar_de_trabajo"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["fecha_de_inicio"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["fecha_de_fin"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["salario"] + "</td>";
      htmlTabla = htmlTabla + "</tr>";
    });
    document.getElementById("Reporte").innerHTML = "";
    document.getElementById("Reporte").innerHTML = htmlTabla;
  });

}
