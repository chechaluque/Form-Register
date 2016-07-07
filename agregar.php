<?php
include('conexion.php');
	
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellidos'];
	$email = $_POST['mail'];
	//$user = $_POST['usuario'];
	$password = $_POST['password'];
	$password = md5($password);
	$telefono = $_POST['telefono'];
//$mysqli=mysqli_connect('localhost','root','','sistema');

$query = "INSERT INTO usuarios (name, lastname, mail, password, phone) VALUES('$nombre','$apellido',
		'$email','$password','$telefono')";

$verificar_user = mysqli_query($mysqli, "SELECT * FROM usuarios WHERE mail='$email'");
	if(mysqli_num_rows($verificar_user)>0){
		echo "repetido";
		exit;
	}else{
$mysqli-> query($query);
	echo "ok";
}
?>