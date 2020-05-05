function Actualizar(){

  $.ajaxSetup({

    async : false

    });

    const datos={
     nombre_del_idioma:$('#nombre_del_idioma').val(),
      buscar:$('#IdBuscar').val(),

      activo:$('select1[name="activo"] option:selected').val(),
    }


    var nombre_del_idioma=$('#nombre_del_idioma').val();
    var act=$('#activo').val();
    var buscar=$('#IdBuscar').val();
  if(nombre_del_idioma==""){
    alert("Complete el campo idioma");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateIdioma.php",
    data:{ nombre_del_idioma: nombre_del_idioma,activo:act,buscar:buscar},
    success:function(r){
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

    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllIdioma.php"; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla="<thead><tr><th>Id Idioma</th><th>Nombre del Idioma</th><th>Activo</th></tr></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
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
          htmlTabla = htmlTabla+"<tr>";
          htmlTabla = htmlTabla+"<td>"+ value["id_idioma"] +"</td>"; //colocar lo que corresponda segun tabla
          htmlTabla = htmlTabla+"<td>"+ value["nombre_del_idioma"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ imprimir +"</td>";
          htmlTabla = htmlTabla+"</tr>";
        });
        document.getElementById("Reporte").innerHTML = "";
        document.getElementById("Reporte").innerHTML = htmlTabla;
    });





  }
