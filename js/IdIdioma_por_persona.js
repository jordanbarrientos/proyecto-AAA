function Buscar(){

  $.ajaxSetup({

    async : false

    });

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdIdioma_por_persona.php?Id=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id de idioma");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              
              Act = value["activo"];
              idioma =value["id_idioma"];
              nivel =value["id_nivel"];


              document.getElementById('activo').value=Act;
              document.getElementById('id_idioma').value=idioma;
              document.getElementById('id_nivel').value=nivel;
             });

          });

      }
    }
