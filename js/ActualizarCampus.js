function Actualizar(){

    const datos={
     nombre:$('#nombre').val(),
      buscar:$('#IdBuscar').val(),
      activo:$('#activo').val(),
    }


    var nombre=$('#nombre').val();
    var activo=$('#activo').val();
    var buscar=$('#IdBuscar').val();
  if(nombre==""){
    alert("Complete el nombre");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateCampus.php",
    data:{ nombre: nombre, activo:activo, buscar:buscar},
    success:function(r){
      console.log(buscar);
        alert("actualización exitosa");
    }
  });
  }
  $('#form_insertar').trigger('reset');
  
  ReporteFormulario ();

  }

  function ReporteFormulario() {

    $.ajaxSetup({

      async: false

    });

    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllCampus.php";
    var htmlTabla = "<thead><tr><th>Id Campus</th><th>Nombre</th><th>Activo</th></tr></thead>";
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
        htmlTabla = htmlTabla + "<td>" + value["id_campus"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["nombre"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + imprimir + "</td>";
        htmlTabla = htmlTabla + "</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }
