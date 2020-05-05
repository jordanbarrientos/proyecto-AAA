function Buscar(){

    var IdBusqueda= document.getElementById("seleccionar").value;
    var urlParams=new URLSearchParams(window.location.search);
     var nombre_usuario= urlParams.get('nombre_usuario');
    
      var url = "../Servicios Select All/SelectAllUsuario.php?nombre_usuario=" + nombre_usuario ;


        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

  
              identidad = value["identidad"];
              nombre = value["nombre"];
              fecha_nacimiento = value["fecha_nacimiento"];
              correo_electronico = value["correo_electronico"];
              sexo = value["sexo"];
              expectativa_salarial = value["expectativa_salarial"];
              contrasena = value["contrasena"];
              hoja_de_vida = value["hoja_de_vida"];
            
                
              document.getElementById('identidad').value = identidad;
              document.getElementById('nombre').value = nombre; 
              document.getElementById('fecha_nacimiento').value = fecha_nacimiento;
              document.getElementById('correo_electronico').value = correo_electronico;
              document.getElementById('sexo').value = sexo;
              document.getElementById('expectativa_salarial').value = expectativa_salarial;
              document.getElementById('contrasena').value = contrasena;
              document.getElementById('hoja_de_vida').value = hoja_de_vida;

             });

          });

      }
    
