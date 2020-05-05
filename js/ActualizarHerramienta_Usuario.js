function Actualizar(){

  $.ajaxSetup({

      async:false

  });

    const datos={
     id_herramientas:$('#id_herramientas').val(),
      buscar:$('#IdBuscar').val(),
      id_nivel:$('#id_nivel').val()
    }

    var id_herramientas=$('#id_herramientas').val();

    var id_nivel=$('#id_nivel').val();
    var buscar=$('#IdBuscar').val();
  
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateHerramientas_de_usuario.php",
    data:{id_herramientas:id_herramientas,id_nivel:id_nivel,buscar:buscar},
    success:function(r){
      console.log(buscar);
        alert("actualización exitosa");
    }
  });

  $('#form_insertar').trigger('reset');

  ReporteFormulario();
}

function ReporteFormulario() {

  $.ajaxSetup({

    async: false

  });
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
  var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllHerramientas_de_usuario.php?nombre_usuario="+nombre_usuario;
  var htmlTabla = "<thead><tr><th>Id </th><th>Herramientas</th><th>Nivel</th></tr></thead>";
  $.getJSON(url, function (data) {
    $.each(data, function (key, value) {
      htmlTabla = htmlTabla + "<tr>";
      htmlTabla = htmlTabla + "<td>" + value["id_relacion"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["descripcion"] + "</td>";
      htmlTabla = htmlTabla + "<td>" + value["nombre"] + "</td>";
      htmlTabla = htmlTabla + "</tr>";
    });
    document.getElementById("Reporte").innerHTML = "";
    document.getElementById("Reporte").innerHTML = htmlTabla;
  });

}
