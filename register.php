<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>NUHS Patient Visualization</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/login-css.css">
</head>

<body>
    <?php include 'navbar.php';?>


    <?php
    	if (isset ( $_POST ['username'] )) {
	
			$servername = "localhost";
			$username = "kelvinheng92";
			$password = "kelvin&emmanuel";
			$dbname = "nuhs";
			
			// Create connection
			$conn = mysqli_connect($servername, $username, $password, $dbname);
			// Check connection
			if (!$conn) {
			    die("Connection failed: " . mysqli_connect_error());
			}
			
			$sql = "SELECT username FROM login WHERE username='".$_POST ['username']."'";
			$result = mysqli_query($conn, $sql);
			
			if (mysqli_num_rows($result) == 0 && $_POST ['password']==$_POST ['password2']) {
				$sql1 = "INSERT INTO login (username, password) VALUES ('".$_POST ['username']."', '".$_POST ['password']."')";
				//$sql2 = "INSERT INTO channel (username, streamkey, name, description) VALUES ('".$_POST ['username']."',".$key.", 'Untitled Channel', '')";
				if (mysqli_query($conn, $sql1)) {
				    echo '<div class="alert alert-success" role="success"><center>Account successfully created.</center></div>';
				} else {
				    echo "Error: " . $sql1 . "<br>" . mysqli_error($conn);
				}
			} else if ($_POST ['password']!=$_POST ['password2']){
				echo '<div class="alert alert-warning" role="warning"><center>Password does not match.</center></div>';
			} else {
				echo '<div class="alert alert-warning" role="warning"><center>Username already taken.</center></div>';
			}
			
			mysqli_close($conn);
			
			
		}
	?>




    <form class="form" method="post" action="register.php">
			<fieldset>
			
			<!-- Form Name -->
			<legend>Register</legend>
			
			<!-- Text input-->
			<div class="form-group">
			  	<label for="username">Username <small>(5-32 characters)</small></label>
			  	<input class="form-control" id="username" name="username" type="text" required pattern="^[a-zA-Z0-9]{5,32}$" title="5-32 alphanumeric characters">
			</div>
			
			<!-- Text input-->
			<div class="form-group">
			  	<label for="password">Password <small>(7-32 characters)</small></label>
			  	<input class="form-control" id="password" name="password" type="password" required pattern=".{7,32}" title="7-32 characters">
			</div>
			
			<!-- Text input-->
			<div class="form-group">
			  	<label for="password2">Repeat password</label>
			  	<input class="form-control" id="password2" name="password2" type="password" required pattern=".{7,32}" title="7-32 characters">
			</div>
			
			<!-- Button -->
			<div class="form-group">
				<button class="btn btn-success">Register</button>
			</div>
			
			</fieldset>
			</form>


    <footer>
        <div class="container-fluid" align="center">
            <p class="text-muted">
                &copy NUHS 2014
            </p>
        </div>
    </footer>


    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.min.js"></script>
    <script src="http://code.highcharts.com/highcharts.js"></script>
    <script src="js/index-js.js"></script>
</body>
</html>