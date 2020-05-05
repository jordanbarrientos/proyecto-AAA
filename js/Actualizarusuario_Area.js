function Actualizar(){

    const datos={
     nombre_usuario:$('#nombre_usuario').val(),
      buscar:$('#IdBuscar').val(),
      nombre_area:$('#nombre_area').val(),
    }



  if(nombre_area==""){
    alert("Complete el campo area");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateUsuario_area.php",
    data:datos,
    success:function(r){
        alert("actualizacion exitosa");


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
    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllusuario_area.php?nombre_usuario="+nombre_usuario; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla = "<thead><tr><th>Id</th><th>Area</th></tr></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
    $.getJSON(url, function (data) {
      $.each(data, function (key, value) {
        htmlTabla = htmlTabla + "<tr>";
        htmlTabla = htmlTabla + "<td>" + value["id_relacion"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["nombre_area"] + "</td>"; //colocar lo que corresponda segun tabla
        htmlTabla = htmlTabla + "</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }
