<?php
$conexion = mysqli_connect("localhost", "root", "", "sistema");
$usu = addslashes($_POST["usu"]);
$pass = addslashes($_POST["pass"]);


$consulta = mysqli_query("SELECT * FROM usuarios WHERE name = '$usu' AND password = '$pass'");
		if(mysqli_num_rows($consulta)<1){
			echo 'usuario';
}

?>
