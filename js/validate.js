$(document).on("ready",function(){
//function validar(){
	$("#btn-enviar").click(function(){
	var name, lastname, mail, user, pass, phone, expretion, datos;
	name = document.getElementById("nombre").value;
	lastname  = document.getElementById("apellidos").value;
	mail = document.getElementById("mail").value;
	user  = document.getElementById("usuario").value;
	pass  = document.getElementById("password").value;
	phone  = document.getElementById("telefono").value;
	
	expretion = /\w+@\w+\.+[a-z]/;
	
	
	
	if(name == "" || lastname =="" || mail ==""|| user =="" || pass =="" || phone ==""){
		alert("Todos los campos son requeridos");
		return false;
	}
	else if(name.length > 25){
		alert("EL nombre tiene que ser entre 0 y 25 letras");
		return false;
	}
	

	else if(lastname.length > 40){
		alert("EL apellido tiene que ser entre 0 y 25 caracteres");
		return false;
	}
	else if(mail.length > 40){
		alert("EL mail tiene que ser entre 0 y 25 caracteres");
		return false;
	}
	else if(!expretion.test(mail)){
		alert("EL mail no es valido");
		return false;
	}
	else if(user.length > 20 || pass.length>20){
		alert("EL el usuario y clave deben tener 20 caracteres");
		return false;
	}
	else if(phone.length > 10){
		alert("EL telefono es muy largo");
		return false;
	}
	else if(isNaN(phone)){
		alert("EL campo telefono debe ser numerico");
		return false;
	}
	
         $.ajax({
            
            url: "agregar.php",
			type: "POST",
            data: $('form').serialize(),
            success: function(data){
           if(data=="repetido"){
			   $("#mensaje").addClass('error').html("Usuario existente.").show(500).delay(3000).hide(300);
				$("span").hide();
		   }else{
              $("#mensaje").addClass('error').html("Register was success.").show(500).delay(3000).hide(300);
				$("span").hide();
				  //document.location.href = "index.html";
              $('#nombre').value='';
           		document.getElementById("nombre").value='';
				document.getElementById("apellidos").value='';
				document.getElementById("mail").value='';
				document.getElementById("usuario").value='';
				document.getElementById("password").value='';
				document.getElementById("telefono").value='';
			}
				
            },
            beforeSend:function()
			{
                 $("span").html("Loading...")
            }
        });
	return false;
});
});	
//}

function validar1(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla==8) return true; // 3
    patron =/[A-Za-z\s]/; // 4
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}
function SoloNumeros(evt){
 if(window.event){//asignamos el valor de la tecla a keynum
  keynum = evt.keyCode; //IE
 }
 else{
  keynum = evt.which; //FF
 } 
 //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
 if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
  return true;
 }
 else{
  return false;
 }
}
