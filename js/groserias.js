
function check_val(idCampo)
{
 var bad_words=new Array("nalga","mierda","puta","maldito","culero","marica","caca","pija","verga","pendejo",
 "estupido","imbecil","idiota","perra","enfermo","pene","vagina","pisan","coger","puto","ramera","gilipolla",
 "acabar","ano","cabron","zorra","manosear","diarrea","pecho","lesbiana","masturbar","mamada","sexo","testiculos",
 "chupar","amante","juguetona","homosexual","drogo","marihuana","cocaina","pito","clitoris","pedazo","joder","jeta",
 "maje","sexo","sexual","gay");

 var check_text=document.getElementById(idCampo).value;
 var error=0;
 for(var i=0;i<bad_words.length;i++)
 {
  var val=bad_words[i];
  if((check_text.toLowerCase()).indexOf(val.toString())>-1)
  {
   error=error+1;
  }
 }
  
 if(error>0)
 {
  document.getElementById("groserias").innerHTML="ADVERTENCIA: mala palabra encontrada";
  document.getElementById("boton-guardar").disabled = true;
 }
 else
 {
  document.getElementById("groserias").innerHTML="";
  document.getElementById("boton-guardar").disabled = false;
 }
}

/*  *******************----OJO INSTRUCCIONES----**********************

1.COLOCAR LA FUNCION onKeyUp="check_val()" EN EL CAMPO QUE DESEEN -NO- PERMITIR GROSERIAS (INPUTS)
2. CAMBIAR (COPIAR Y PEGAR) EL BOTON DE GUARDAR EN TODOS LOS FORMULARIOS POR EL EJEMPLO DE ABAJO, EL (id="boton-guardar") 
Y LA CLASE (class="btn aqua-gradient btn-lg btn-block") Y EL ICONO (<i class="fas fa-magic ml-1"></i>)
3. LLAMAR EL SCRIPT DE groserias.js EN LA SECCION DE LOS SCRIPT DEL HTML DE LOS FORMULARIOS


EJEMPLOS:

1. <!--<!-- TEXTO -->

<div class="md-form">
<i class="fas fa-language prefix"></i>
<input type="text" id="nombre_del_idioma"  class="form-control validate" onKeyUp="check_val()">
<label for="nombre_del_idioma" id="groseria" data-error="invalido" data-success="correcto">Nombre del idioma</label>
</div>


2. <!--BOTON GUARDAR -->

<button type="button" class="btn aqua-gradient btn-lg btn-block"  id="boton-guardar" onclick="guardarDatos();">Enviar <i class="fas fa-magic ml-1"></i></button> 

3. <!-- SCRIPTS -->

  <!-- groserias -->
  <script type="text/javascript" src="js/groserias.js"></script>
*/
