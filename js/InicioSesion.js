
function Ingresar(){

	$.ajaxSetup({

		async: false

	});

	const datos={
		inputEmail: $('#inputEmail').val(),
		inputPassword: $('#inputPassword').val()
	};

	$.ajax({
		type:"GET",
		url:"../Servicios Insert/InicioSesion.php",
		data:datos,
		success:function (r){
			let nombre_usuario='';
			let validar='';
			let Tipo_de_usuario='';
			r.forEach(element => {
				validar+=element.valido,
				nombre_usuario+=element.nombre_usuario,
				Tipo_de_usuario+=element.Tipo_de_usuario
			});

	var IdSesion; 

    if(validar==1){
		
		var url="../Servicios Insert/Insert_Sesion.php?nombre_usuario="+nombre_usuario;
		$.getJSON(url, function (data) {
			$.each(data, function (key, value) { 
				IdSesion = value["Mensaje"]; 
			});
		  });
		 
		
	}
	
	

	if(validar==1 && Tipo_de_usuario==1){
		window.location.href='FormularioEducacion.html?nombre_usuario='+nombre_usuario+'&Tipo_de_usuario='+Tipo_de_usuario+'&IdSesion='+IdSesion;
	}else if (validar==1 && Tipo_de_usuario==2) {
		window.location.href='FormularioAcceso.html?nombre_usuario='+nombre_usuario+'&Tipo_de_usuario='+Tipo_de_usuario+'&IdSesion='+IdSesion;
	}	else{
			alert('Contraseña o Usuario Incorrectos')
		}
	}
	});
}
