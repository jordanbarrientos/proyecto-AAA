function ActualizarIdiomaPersona(){

    $.ajaxSetup({

        async : false
    
        });

    const datos={
    
     id_relacion:$('#IdBuscar').val(),
      id_idioma:$('#id_idioma').val(),
      id_nivel:$('#id_nivel').val(),
      activo:$('#activo').val(),
    }

    var activo=$('#activo').val();
    var idioma=$('#id_idioma').val();
    var nivel=$('#id_nivel').val();
    var buscar=$('#IdBuscar').val();
    
        $.ajax({
            type:"GET",
            url:"../Servicios Update/UpdateIdioma_por_persona.php",
            data:datos,
            success:function(r){
            console.log(buscar);
                alert("actualización exitosa");
            }
        });
   
  
    ReporteFormulario();
  
  }

  function ReporteFormulario() {

    $.ajaxSetup({

      async: false

    });
    var urlParams=new URLSearchParams(window.location.search);
    var nombre_usuario= urlParams.get('nombre_usuario');
    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllIdioma_por_persona.php?nombre_usuario="+nombre_usuario; //aqui va llamar el select all de las tablas que le tocaron
    var htmlTabla = "<thead><tr><th>Id</th><th>Idioma</th><th>Nivel</th><th>Activo</th></tr></thead>"; 
    var hola;
    var imprimir="" 
    // aqui llamando a las cabeceras, colocar el nombre de las columnas de la tabla
    $.getJSON(url, function (data) {

     

      $.each(data, function (key, value) {
        hola=value["activo"];
        if (hola==1) {
          imprimir="activo";
        }else{
          imprimir="inactivo";
        }
        
        htmlTabla = htmlTabla + "<tr>";
        htmlTabla = htmlTabla + "<td>" + value["id_relacion"] + "</td>"; //colocar lo que corresponda segun tabla 
        htmlTabla = htmlTabla + "<td>" + value["nombre_del_idioma"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["nombre"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + imprimir + "</td>";
        htmlTabla = htmlTabla + "</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }

