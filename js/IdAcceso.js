function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/idAcceso.php?Id=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id de Acceso");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

                Tipo_de_usuario =value["tipo_de_usuario"];
              Act = value["activo"];
             objeto=value["id_objeto"];
            


              document.getElementById('tipo_de_usuario').value=Tipo_de_usuario;
              document.getElementById('activo').value=Act;
              document.getElementById('id_objeto').value=objeto;
             
             });

          });

      }
    }
