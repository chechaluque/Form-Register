<?php
include('../php/conexion.php');
if(isset($_SESSION['id_usu'])==false or isset($_SESSION['id_area'])==false){
	header('Location: login.php');
}else{
	if($_SESSION['id_area'] == 'almacen'){
		header('Location: almacen.php');
	}else{
		$nombre = mysql_query("SELECT * FROM usuarios WHERE id_usu = '".$_SESSION['id_usu']."'");
		$nombre2 = mysql_fetch_array($nombre);
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login por Areas</title>

<link href="../css/estilo.css" rel="stylesheet">
<script src="../js/jquery.js"></script>
<script src="../js/myjava.js"></script>
</head>
<body>
<img id="fondo" src="../recursos/ventas_fondo.jpg"/>
<header>
	<table align="left" border="0" height="100%" width="100%">
    	<tr>
        	<td><b>AREA DE VENTAS</b></td>
            <td width="300" align="left"><label><img id="llave" src="http://wiwoohouse.com/wp-content/uploads/2014/10/llave.png" alt="" />Bienvenido: <?php echo $nombre2['id_usu']; ?></label></td>
            <td width="50"><a href="../php/logout.php">Log Out</a></td>
        </tr>
    </table>
</header>

</body>
</html>
