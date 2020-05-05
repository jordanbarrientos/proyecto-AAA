function Buscar(){
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Update/IdUsuario_Area.php?Id=" + IdBusqueda + "&nombre_usuario="+ nombre_usuario ;

      if(IdBusqueda==''){
        alert("Ingrese Id del usuario");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

             
              Act = value["id_area"];


              
              document.getElementById('nombre_area').value=Act;

             });

          });

      }
    }