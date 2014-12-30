<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>NUHS Patient Visualization</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/login-css.css">
</head>

<body>
    <?php 
    if (isset ( $_POST ['usernameInput'] )) {
        
        $servername = "http://sql5.freesqldatabase.com";
        $username = "emman";
        $password = "password";
        $dbname = "sql562615";
        $loginAttempt = true;
        
        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        
        $sql = "SELECT * FROM login WHERE username='".$_POST['usernameInput']."'";
        $result = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            $row = mysqli_fetch_assoc($result);
            if ($row["username"] == $_POST['usernameInput'] && $row["password"]==$_POST['passwordInput']){
                $_SESSION ['username'] = $_POST ['usernameInput'];
            }
        }
        
        mysqli_close($conn);       
    }



    if (isset($_SESSION['username'])) {
        session_start();
        $_SESSION["OK"] = true;
        header("Location: home.php");
    } else {
        if(isset($loginAttempt)){
            echo '
            <div class="container center-block" id="content">
                <div class="jumbotron" align="center">
                    <h1>NUHS Patient Visualization Login</h1> 
                    <div class="alert alert-danger" role="alert">
                        <b>Login failed!</b> Wrong username or password<br>
                        Don\'t have a account? Please contact your administrator
                    </div>      
                    <form class="form" role="form" method="post" action="#" accept-charset="UTF-8" id="login-nav">
                        <div class="form-group">
                           <label class="sr-only" for="usernameInput">Username</label>
                           <input type="text" class="form-control" name="usernameInput" placeholder="Username" required>
                        </div>
                        <div class="form-group">
                           <label class="sr-only" for="passwordInput">Password</label>
                           <input type="password" class="form-control" name="passwordInput" placeholder="Password" required>
                        </div>
                        <div class="form-group">
                           <button type="submit" class="btn btn-success btn-block">Sign in</button>
                        </div>
                     </form>
                </div>
            </div>';
        }else{
            echo '
            <div class="container center-block" id="content">
                <div class="jumbotron" align="center">
                    <h1>NUHS Patient Visualization Login</h1> 
                    <form class="form" role="form" method="post" action="#" accept-charset="UTF-8" id="login-nav">
                        <div class="form-group">
                           <label class="sr-only" for="usernameInput">Username</label>
                           <input type="text" class="form-control" name="usernameInput" placeholder="Username" required>
                        </div>
                        <div class="form-group">
                           <label class="sr-only" for="passwordInput">Password</label>
                           <input type="password" class="form-control" name="passwordInput" placeholder="Password" required>
                        </div>
                        <div class="form-group">
                           <button type="submit" class="btn btn-success btn-block">Sign in</button>
                        </div>
                     </form>
                </div>
            </div>';
        }
    }

    ?>
    


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