$(document).ready(function(){

  $.ajaxSetup({

    async: false

  });

var urlParams=new URLSearchParams(window.location.search);
var nombre_usuario= urlParams.get('nombre_usuario');
var Tipo_de_usuario= urlParams.get('Tipo_de_usuario');
var id_sesion= urlParams.get('IdSesion');

const datos={
  nombre_usuario:nombre_usuario,
  Tipo_de_usuario:Tipo_de_usuario,
  id_sesion:id_sesion,
}

$.ajax({
  type:"GET",
  url:"../Servicios Select Id/MenuDinamico.php",
  data:datos,
  success:function (r){

    let plantilla='';

    r.forEach(element => {
        plantilla+=`
        <li class="nav-item">
          <a class="nav-link" href="${element.Ruta}?nombre_usuario=${datos.nombre_usuario}&Tipo_de_usuario=${datos.Tipo_de_usuario}&IdSesion=${datos.id_sesion}">${element.Descripcion}</a>
        </li>
        `

    })

   plantilla+= '<li class="nav-item"><a class="nav-link" id="salir" href="../Servicios Update/Update_Sesion.php?IdSesion='+id_sesion+'">Cerrar Sesion</a></li>';

      $('#menu').html(plantilla);

      if (datos.Tipo_de_usuario == 2){

          $(document).ready(function() {
              $.post("../Servicios Select Id/sesionnormal.php", function(carr){
           });
          });

      }
      else{
          $(document).ready(function() {
              $.post("../Servicios Select Id/sesionadministrador.php", function(carr){
           });
          });
      }
  }

});


})
$(document).ready(function(){
    $("#salir").click(function(){

  $.post("../Servicios Select Id/salir.php", function (ACCS) {
    if(ACCS!='Si inicio sesion'){
      window.location.href="InicioSesion.html"
    }
        });
    });
  });
