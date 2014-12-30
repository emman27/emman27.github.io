<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>NUHS Patient Visualization</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/data-css.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="js/data-js.js"></script>
</head>
<body>

    <?php
        require("logincheck.php");
        include "navbar.php";
    ?>

    <div class="container" id="content">
        <h1>NUHS Patient Visualization</h1>
        <div class="row">
            <ul class="row no-bullets" id="current-charts">
                <li class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="col-md-12">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="filter1">Filter by:</label>
                                <select class="form-control" id="filter1">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="datasource1">Filter by:</label>
                                <select class="form-control" id="datasource1">
                                    <option>Hospitalization fees</option>
                                    <option>Medication fees</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 chart-holder" id="chart1"></div>
                </li>
            </ul>
        </div>
        <div class="row" align="right">
            <div class="col-md-12">
                <button type="button" class="btn btn-primary" id="add-btn" onclick="newChart()">Add</button>
                <button type="button" class="btn btn-info">Save to Favorites</button>
                <button type="reset" class="btn btn-danger">Reset</button>
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

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.2/jquery-ui.min.js"></script>
    <script src="http://code.highcharts.com/highcharts.js"></script>
</body>
</html>