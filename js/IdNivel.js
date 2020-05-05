function Buscar(){

  $.ajaxSetup({

    async : false

    });

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdNivel.php?Id=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id de nivel");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              Nombre =value["nombre"];
              Act = value["activo"];


              document.getElementById('nombre').value=Nombre;
              document.getElementById('activo').value=Act;

             });

          });

      }
      
    }
