<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>NUHS Patient Visualization</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index-css.css">
</head>
<body>
    <?php
        require("logincheck.php");
        include "navbar.php";
    ?>

    <div class="container" id="content">
        <div class="jumbotron">
            <h1>Welcome to NUHS Patient Visualization</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Recent Graphs</h2>
                <ul class="row no-bullets" id="recent-graphs"></ul>
                <br>
                <h2>Favorites</h2>
                <ul class="row no-bullets" id="favorite-graphs"></ul>
            </div>
        </div>
    </div>

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