function ActualizarAcceso(){

    $.ajaxSetup({
    
        async : false
      
      });

    const datos={
        tipo_de_usuario:$('#tipo_de_usuario').val(),
    id_objeto:$('#id_objeto').val(),
    activo:$('#activo').val(),
     buscar:$('#IdBuscar').val(),
      
      
     
    }


    var tipo_de_usuario=$('#tipo_de_usuario').val();
    var activo=$('#activo').val();
    var id_objeto=$('#id_objeto').val();
    
    var buscar=$('#IdBuscar').val();
    
    if(tipo_de_usuario==""){
        alert("Complete el campo Acceso");
    }else{
        $.ajax({
            type:"GET",
            url:"../Servicios Update/UpdateAcceso.php",
            data:datos,
            success:function(r){
            console.log(buscar);
                alert("actualización exitosa");
            }
        });
    }
  
    ReporteFormulario();

  }

  function ReporteFormulario (){

    $.ajaxSetup({
    
      async : false
    
    });
    
    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllAccesos.php"; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla="<thead><tr><th>Id Acceso</th><th>Tipo de Usuario</th><th>Id Objeto</th><th>Activo</th></tr></thead>"; // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
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
          htmlTabla = htmlTabla+"<td>"+ value["Id_acceso"] +"</td>"; //colocar lo que corresponda segun tabla 
          htmlTabla = htmlTabla+"<td>"+ value["tipo_de_usuario"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["Id_objeto"] +"</td>";
          htmlTabla = htmlTabla + "<td>" + imprimir + "</td>";
          htmlTabla = htmlTabla + "</tr>";
        });
        document.getElementById("Reporte").innerHTML = "";
        document.getElementById("Reporte").innerHTML = htmlTabla;
    });
    
    }
