function Buscar(){
  var urlParams=new URLSearchParams(window.location.search);
  var nombre_usuario= urlParams.get('nombre_usuario');
    var IdBusqueda= document.getElementById("IdBuscar").value;
      var url = "../Servicios Select Id/SelectIdEducacion.php?id_educacion=" + IdBusqueda + "&nombre_usuario="+ nombre_usuario ;

      if(IdBusqueda==''){
        alert("Ingrese Id de educacion");
      }else{
        $.getJSON(url, function (data) {
            $.each(data, function (key, value) {
                alert("Registro Seleccionado");

             
                nivel_de_grado =value["nivel_de_grado"];
                Fecha_de_inicio = value["fecha_de_inicio"];
                Fecha_de_fin =value["fecha_de_fin"];
                Id_campus =value["id_campus"];
                Id_carrera = value["id_carrera"];
  
            
                document.getElementById('nivel_de_grado').value=nivel_de_grado;
                document.getElementById('fecha_de_inicio').value=Fecha_de_inicio;
                document.getElementById('fecha_de_fin').value=Fecha_de_fin;
                document.getElementById('id_campus').value=Id_campus;
                document.getElementById('id_carrera').value=Id_carrera;

             });

          });

      }
    }