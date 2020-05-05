function Buscar(){

  $.ajaxSetup({

    async: false
  });
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdUsuarioHerramienta.php?Id=" + IdBusqueda + "&nombre_usuario="+ nombre_usuario;

      if(IdBusqueda==''){
        alert("Ingrese id de relacion");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              id_herramientas =value["id_herramientas"];
              id_nivel = value["id_nivel"];

              document.getElementById('id_herramientas').value=id_herramientas;
              document.getElementById('id_nivel').value=id_nivel;

             });

          });

      }
    }
