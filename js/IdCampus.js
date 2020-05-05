function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
    var url = "../Servicios Select Id/SelectIdCampus.php?id_campus=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id del Campus");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              nombre =value["nombre"];
              activo = value["activo"];
         
          
              document.getElementById('nombre').value=nombre;
              document.getElementById('activo').value=activo;
            
             

             });

          });

      }
    }
