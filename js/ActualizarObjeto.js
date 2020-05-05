function Actualizar() {

  
  $.ajaxSetup({

    async: false

  });
  const datos = {
    Descripcion: $('#Descripcion').val(),
    Ruta: $('#Ruta').val(),
    Activo: $('select1[name="Activo"] option:selected').val(),
    buscar: $('#IdBuscar').val(),
  }

  var Descripcion = $('#Descripcion').val();
  var Ruta = $('#Ruta').val();
  var Activo = $('#Activo').val();
  var buscar = $('#IdBuscar').val();
  if (Descripcion == "" || Ruta == "") {
    alert("Complete los campos");
  } else {
    $.ajax({
      type: "GET",
      url: "../Servicios Update/UpdateObjetos.php",
      data: { Descripcion: Descripcion, Ruta: Ruta, Activo: Activo, buscar: buscar },
      success: function (r) {
        console.log(buscar);
        alert("actualización exitosa");
      }
    });
  }
  $('#form_insertar').trigger('reset');

  ReporteFormulario ();

}

function ReporteFormulario (){

  $.ajaxSetup({

    async : false

  });

  var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllObjeto.php";
  var htmlTabla="<thead><tr><th>Id Objeto</th><th>Descripcion</th><th>Ruta</th><th>Activo</th></tr></thead>";
  var hola;
  var imprimir="" 
  $.getJSON(url, function (data) {

    $.each(data, function (key, value) {
      hola=value["Activo"];
      if (hola==1) {
        imprimir="activo";
      }else{
        imprimir="inactivo";
      }

        htmlTabla = htmlTabla+"<tr>";
        htmlTabla = htmlTabla+"<td>"+ value["Id_objeto"] +"</td>";
        htmlTabla = htmlTabla+"<td>"+ value["Descripcion"] +"</td>";
        htmlTabla = htmlTabla+"<td>"+ value["Ruta"] +"</td>";
        htmlTabla = htmlTabla+"<td>"+ imprimir +"</td>";
        htmlTabla = htmlTabla+"</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
  });

}