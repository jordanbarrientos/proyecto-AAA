function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Select Id/SelectIdObjetos.php?Id_objeto=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id del objeto");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              Descripcion =value["Descripcion"];
              Ruta = value["Ruta"];
              Activo = value["Activo"];


              document.getElementById('Descripcion').value=Descripcion;
              document.getElementById('Ruta').value=Ruta;
              document.getElementById('Activo').value=Activo;

             });

          });

      }
    }