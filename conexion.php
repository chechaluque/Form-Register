
	<?php
session_start();
	
$username = addslashes($_POST['username']);
$password = addslashes($_POST['password']);
$mysqli=mysqli_connect('localhost','root','','sistema');

$query = "SELECT * FROM usuarios WHERE name='$username' AND password='$password'";
$result = mysqli_query($mysqli,$query)or die(mysqli_error());
	
$num_row = mysqli_num_rows($result);
		$row=mysqli_fetch_array($result);
		if( $num_row >=1 ) {
			echo 'OK';
			//header("location:index.html");
			//$_SESSION['username']=$row['name'];
		}
		else{
			echo 'BAD';
			//header("location:login.php");
		}

//echo json_encode(array('resultado'=>$res));

?>
