function Actualizar(){

  $.ajaxSetup({

    async: false
  });

    const datos={
     descripcion:$('#descripcion').val(),
      buscar:$('#IdBuscar').val(),

      activo:$('#activo').val(),
    }


    var descripcion=$('#descripcion').val();
    var act=$('#activo').val();
    var buscar=$('#IdBuscar').val();
  if(descripcion==""){
    alert("Complete el campo descripcion");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateHerramientas.php",
    data:datos,
    success:function(r){
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

  var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllHerramientas.php";
  var htmlTabla = "<thead><tr><th>Id herramientas</th><th>Descripcion</th><th>Activo</th></tr></thead>";
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
      htmlTabla = htmlTabla + "<td>" + value["id_herramientas"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["descripcion"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + imprimir + "</td>";
      htmlTabla = htmlTabla + "</tr>";
    });
    document.getElementById("Reporte").innerHTML = "";
    document.getElementById("Reporte").innerHTML = htmlTabla;
  });

}