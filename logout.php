<?php
require("logincheck.php");
unset($_SESSION["OK"]);
session_unset();
header("Location: index.php");
?>