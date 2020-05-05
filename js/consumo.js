

  function Consumo (){

    $.ajaxSetup({
    
      async : false
    
    });
    
    var salario_inicial=$('#salario_inicial').val();
    var salario_final=$('#salario_final').val();
    var nom_idioma=$('#nombre_del_idioma').val();
    var niv_idioma=$('#nivel_de_idioma').val();
    var nom_carrera=$('#nombre_carrera').val();
    var nom=$('#nombre').val();
    var nom_area=$('#nombre_area').val();
    var herramienta=$('#herramienta').val();
    var nivel_herramienta=$('#nivel_herramienta').val();


    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/UsuariosRegistrados.php?idioma="+nom_idioma+"&nivel_idioma="+niv_idioma+"&carrera="+nom_carrera+"&campus="+nom+"&area_interes="+nom_area+"&herramientas="+herramienta+"&nivel_herramientas="+nivel_herramienta+"&salario_inicial="+salario_inicial+"&salario_final="+salario_final;



    var htmlTabla="<thead><tr><th>Nombre del Usuario</th><th>Identidad</th><th>Nombre</th><th>Fecha Nacimiento</th><th>Correo Electronico</th><th>Sexo</th><th>Expetativa Salarial</th><th>Hoja de Vida</th></tr></thead>";
    $.getJSON(url, function (data) {
        $.each(data, function (key, value) { 
          htmlTabla = htmlTabla+"<tr>";
          htmlTabla = htmlTabla+"<td>"+ value["nombre_usuario"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["identidad"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["nombre"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["fecha_nacimiento"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["correo_electronico"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["sexo"] +"</td>";
          htmlTabla = htmlTabla+"<td>"+ value["expectativa_salarial"] +"</td>";
          htmlTabla = htmlTabla+"<td> <a href='data:application/pdf;base64,"+value["hoja_de_vida"]+"' download='HojaDeVida.pdf' >  Descargar  </a> </td>";

    
          htmlTabla = htmlTabla+"</tr>";
        });
        document.getElementById("Reporte").innerHTML = "";
        document.getElementById("Reporte").innerHTML = htmlTabla;
    });
    
    }