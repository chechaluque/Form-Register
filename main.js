$(document).on("ready",function(){
		
	
		$("#login").click(function(){
			
		
			$.ajax({
				beforeSend: function(){
					$("span").html("Process....");
				},
				
				url:'conexion.php',
				type: 'POST',
				data:$("#form1").serialize(),
				success:function(resp){
					resp = $.trim(resp);
					if(resp == 'OK')
						document.location.href = 'index.html';
					else {
						
						$('span').html("Password or user name wron!").show(300).delay(3000).hide(300);
						$('#username').val('');
						$('#password').val('');
						//document.location.href = 'login.php';
					}
					
				},
				error:function(jqXHR, estado, error){
					if(jqXHR.status == 0){
						console.log('Not connet: Verify Network.');
					}else if(jqXHR.status == 404){
						console.log('Requested page no fund [404].');
					}else if(jqXHR.status == 500){
						console.log('Internal Error[500].');
					}else if(estado==='parseerror'){
						console.log('Requested JSON parse failed.');
					}else if(estado === 'timeout'){
						console.log('Time out error.');
					}else if(estado === 'abort'){
						console.log('Ajax request aborted.');
					}else{
						console.log('Uncaught Error: '+ jqXHR.resoponseText);
					}
				},
				complete:function(jqXHR, estado){
					
					
				},
			
				
			});
			
		return false;
		});
	
});