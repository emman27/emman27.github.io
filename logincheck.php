<?php
if(!defined("SESSIONSTARTED")){
    session_start();
}
if(!isset($_SESSION["OK"]) || $_SESSION["OK"] == false){
    header("Location: index.php");
    die;
}
//Tell your program the session has been started. This will prevent some useless error messages
define("SESSIONSTARTED", 1);
?>