function Actualizar(){

    const datos={
     nombre_area:$('#nombre_area').val(),
      activo:$('#activo').val(),
      buscar:$('#IdBuscar').val(),
    }


    var nombre_area=$('#nombre_area').val();
    var activo=$('#activo').val();
    var buscar=$('#IdBuscar').val();
  if(nombre_area==""){
    alert("Complete el campo area");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateArea.php",
    data:datos,
    success:function(r){
      console.log(buscar);
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

    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAll_Area.php"; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla = "<thead><tr><th>Id Area</th><th>Nombre Area</th><th>Activo</th></tr></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
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
        htmlTabla = htmlTabla + "<td>" + value["id_area"] + "</td>"; //colocar lo que corresponda segun tabla
        htmlTabla = htmlTabla + "<td>" + value["nombre_area"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + imprimir + "</td>";
        htmlTabla = htmlTabla + "</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }


  
