function Actualizar(){

  $.ajaxSetup({

    async : false

    });

    const datos={
     nombre:$('#nombre').val(),
      buscar:$('#IdBuscar').val(),

      activo:$('select1[name="activo"] option:selected').val(),
      Tipo_Nivel:$('#Tipo_Nivel').val(),
    }


    var nombre=$('#nombre').val();
    var act=$('#activo').val();
    
    var buscar=$('#IdBuscar').val();
    var Tipo_Nivel=$('#Tipo_Nivel').val();
  if(nombre==""){
    alert("Complete el campo nivel");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateNivel.php",
    data:{ nombre: nombre,activo:act,Tipo_Nivel:Tipo_Nivel,buscar:buscar},
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

    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllNivel.php"; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla="<thead><tr><th>Id Nivel</th><th>Nombre</th><th>Activo</th><th>Tipo Nivel</th></tr></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
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
          htmlTabla = htmlTabla+"<td>"+ value["id_nivel"] +"</td>"; //colocar lo que corresponda segun tabla
          htmlTabla = htmlTabla+"<td>"+ value["nombre"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ imprimir +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["Tipo_Nivel"] +"</td>";

          htmlTabla = htmlTabla+"</tr>";
        });
        document.getElementById("Reporte").innerHTML = "";
        document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }

