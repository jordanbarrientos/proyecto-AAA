function Buscar(){

    var IdBusqueda= document.getElementById("IdBuscar").value;
    var url = "../Servicios Select Id/SelectTipoUsuario.php?tipo_de_usuario=" + IdBusqueda ;

      if(IdBusqueda==''){
        alert("Ingrese Id del Campus");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              descripcion =value["descripcion"];
              activo = value["activo"];
         
          
              document.getElementById('descripcion').value=descripcion
              document.getElementById('activo').value=activo;
            
             

             });

          });

      }
    }