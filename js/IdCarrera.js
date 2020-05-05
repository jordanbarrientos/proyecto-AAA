function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Select Id/SelectIdCarrera.php?id_carrera=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id de la carrera");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              nombre_carrera = value["nombre_carrera"];
              activo = value["activo"];


              document.getElementById('nombre_carrera').value=nombre_carrera;
              document.getElementById('activo').value=activo;

             });

          });

      }
    }