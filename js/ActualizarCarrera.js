function Actualizar() {

  $.ajaxSetup({

    async: false

  });

  const datos = {
    nombre_carrera: $('#nombre_carrera').val(),
    activo: $('select1[name="activo"] option:selected').val(),
    buscar: $('#IdBuscar').val(),
  }

  var nombre_carrera = $('#nombre_carrera').val();
  var activo = $('#activo').val();
  var buscar = $('#IdBuscar').val();
  if (nombre_carrera == "") {
    alert("Complete los campos");
  } else {
    $.ajax({
      type: "GET",
      url: "../Servicios Update/UpdateCarrera.php",
      data: { nombre_carrera: nombre_carrera, activo: activo, buscar: buscar },
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

  var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllCarrera.php";
  var htmlTabla = "<thead><tr><th>Id Carrera</th><th>Nombre Carrera</th><th>Activo</th></tr></thead>";
  var hola;
  var imprimir="" 
  $.getJSON(url, function (data) {

    $.each(data, function (key, value) {
      hola=value["activo"];
      if (hola==1) {
        imprimir="activo";
      }else{
        imprimir="inactivo";
      }
      htmlTabla = htmlTabla + "<tr>";
      htmlTabla = htmlTabla + "<td>" + value["id_carrera"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["nombre_carrera"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + imprimir+ "</td>";
      htmlTabla = htmlTabla + "</tr>";
    });
    document.getElementById("Reporte").innerHTML = "";
    document.getElementById("Reporte").innerHTML = htmlTabla;
  });

}