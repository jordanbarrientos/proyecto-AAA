function Buscar(){

  $.ajaxSetup({

    async : false

    });

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdIdioma.php?Id=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id de idioma");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              Nombre_del_idioma =value["nombre_del_idioma"];
              Act = value["activo"];


              document.getElementById('nombre_del_idioma').value=Nombre_del_idioma;
              document.getElementById('activo').value=Act;

             });

          });

      }
    }
