function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdHerramientas.php?Id=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese id de herramientas");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              Descripcion =value["descripcion"];
              Act = value["activo"];


              document.getElementById('descripcion').value=Descripcion;
              document.getElementById('activo').value=Act;

             });

          });

      }
    }
    