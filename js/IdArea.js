function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdArea.php?id_area=" + IdBusqueda;

      if(IdBusqueda==''){
        alert("Ingrese Id del Area");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              Nombre_area =value["nombre_area"];
              activo = value["activo"];


              document.getElementById('nombre_area').value=Nombre_area;
              document.getElementById('activo').value=activo;

             });

          });

      }
    }
