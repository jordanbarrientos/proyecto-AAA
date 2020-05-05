function Actualizar(){

    const datos={

      nivel_de_grado:$('#nivel_de_grado').val(),
      fecha_de_inicio:$('#fecha_de_inicio').val(),
      fecha_de_fin:$('#fecha_de_fin').val(),
      id_campus:$('#id_campus').val(),
      id_carrera:$('#id_carrera').val(),
      buscar:$('#IdBuscar').val(),

    }
     var nivel_de_grado=$('#nivel_de_grado').val();
     var fecha_de_inicio=$('#fecha_de_inicio').val();
     var fecha_de_fin=$('#fecha_de_fin').val();
     var id_campus=$('#id_campus').val();
     var id_carrera=$('#id_carrera').val();
     var buscar=$('#IdBuscar').val();

  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateEducacion.php",
    data:{ nivel_de_grado:nivel_de_grado, fecha_de_inicio:fecha_de_inicio ,fecha_de_fin:fecha_de_fin, id_campus:id_campus, id_carrera:id_carrera, buscar:buscar},
    success:function(r){
      console.log(buscar);
        alert("actualización exitosa");
    }
  });

  $('#form_insertar').trigger('reset');

  ReporteFormulario ();
  }

  function ReporteFormulario (){

    $.ajaxSetup({

      async : false

    });

    var urlParams=new URLSearchParams(window.location.search);
    var nombre_usuario= urlParams.get('nombre_usuario');

    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllEducacion.php?nombre_usuario="+ nombre_usuario;
    var htmlTabla="<thead><tr><th>Id</th><th>Nivel de Grado</th><th>Fecha de Incio </th><th>Fecha Fin</th><th>Id Campus</th><th>Id Carrera</th></tr></thead>";
    $.getJSON(url, function (data) {
        $.each(data, function (key, value) {
          htmlTabla = htmlTabla+"<tr>";
          htmlTabla = htmlTabla+"<td>"+ value["id_educacion"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["nombre"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["fecha_de_inicio"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["fecha_de_fin"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["nombre"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["nombre_carrera"] +"</td>";

          htmlTabla = htmlTabla+"</tr>";
        });
        document.getElementById("Reporte").innerHTML = "";
        document.getElementById("Reporte").innerHTML = htmlTabla;
    });

    }
