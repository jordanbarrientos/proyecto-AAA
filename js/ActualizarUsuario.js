function Actualizar(){

  $.ajaxSetup({

    async: false

  });
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');

    const datos={
      nombre_usuario:$('#nombre_usuario').val(),
      identidad:$('#identidad').val(),
      nombre:$('#nombre').val(),
      hoja_de_vida:$('#hoja_de_vida').val(),
      fecha_nacimiento:$('#fecha_nacimiento').val(),
      correo_electronico:$('#correo_electronico').val(),
      sexo:$('select1[name="sexo"] option:selected').val(),
      expectativa_salarial:$('#expectativa_salarial').val(),
      contrasena:$('#contrasena').val(),

     
    }
    var identidad=$('#identidad').val();
    var nombre=$('#nombre').val();
    var hoja_de_vida=$('#hoja_de_vida').val();
    var fecha_nacimiento=$('#fecha_nacimiento').val();
    var correo_electronico=$('#correo_electronico').val();
    var sexo=$('#sexo').val();
    var expectativa_salarial=$('#expectativa_salarial').val();
    var contrasena=$('#contrasena').val();
  if(identidad=="" || nombre=="" || hoja_de_vida=="" || correo_electronico=="" || contrasena==""){
    alert("Complete los campos");
  }else{
  $.ajax({
    type:"GET",
    url:"../Servicios Update/UpdateUsuario.php",
    data:{identidad:identidad, nombre:nombre ,hoja_de_vida:hoja_de_vida, fecha_nacimiento:fecha_nacimiento, correo_electronico:correo_electronico, sexo:sexo, expectativa_salarial:expectativa_salarial, contrasena:contrasena, nombre_usuario:nombre_usuario},
    success:function(r){
      console.log(nombre_usuario);
        alert("actualización exitosa");
    }
  
  });

        document.getElementById("identidad").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("hoja_de_vida").value = "";
        document.getElementById("fecha_nacimiento").value = "";
        document.getElementById("correo_electronico").value = "";
        document.getElementById("sexo").value = "";
        document.getElementById("expectativa_salarial").value = "";
        document.getElementById("contrasena").value = "";
  }
  $('#form_insertar').trigger('reset');

  ReporteFormulario();

  }
  function ReporteFormulario() {

    $.ajaxSetup({

      async: false

    });
    var urlParams = new URLSearchParams(window.location.search);
    var nombre_usuario = urlParams.get('nombre_usuario');
    var url = "http://localhost/Proyecto_AAA/Servicios%20Select%20All/SelectAllUsuario.php?nombre_usuario="+nombre_usuario;
    var htmlTabla = "<thead><th>Identidad</th><th>Nombre</th><th>Hoja de Vida</th><th>Fecha de Nacimiento</th><th>Correo Electronico</th><th>Sexo</th><th>Expectativa Salarial</th><th>Contraseña</th></tr></thead>";
    $.getJSON(url, function (data) {
      $.each(data, function (key, value) {
        htmlTabla = htmlTabla + "<tr>";
        htmlTabla = htmlTabla + "<td>" + value["identidad"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["nombre"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["hoja_de_vida"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["fecha_nacimiento"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["correo_electronico"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["sexo"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["expectativa_salarial"] + "</td>";
        htmlTabla = htmlTabla + "<td>" + value["contrasena"] + "</td>";
        htmlTabla = htmlTabla + "</tr>";
      });
      document.getElementById("Reporte").innerHTML = "";
      document.getElementById("Reporte").innerHTML = htmlTabla;
    });

  }


  
