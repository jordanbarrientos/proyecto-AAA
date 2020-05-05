function Buscar(){
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
    var IdBusqueda= document.getElementById("IdBuscar").value;
    var url = "../Servicios Update/IdExperiencia.php?Id=" + IdBusqueda + "&nombre_usuario="+ nombre_usuario ; 

      if(IdBusqueda==''){
        alert("Ingrese Id de Experiencia");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

              
              lugar_de_trabajo=value["lugar_de_trabajo"];
              fecha_de_inicio=value["fecha_de_inicio"];
              fecha_de_fin=value["fecha_de_fin"];
              salario=value["salario"];

              
              document.getElementById('lugar_de_trabajo').value=lugar_de_trabajo;
              document.getElementById('fecha_de_inicio').value=fecha_de_inicio;
              document.getElementById('fecha_de_fin').value=fecha_de_fin;
              document.getElementById('salario').value=salario;
             });

          });

      }
    }
