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
    }
    $('#form_insertar').trigger('reset');
  
  
  
    }
    