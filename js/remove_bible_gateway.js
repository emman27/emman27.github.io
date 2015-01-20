$(document).ready(function(){
    var stuff = $(".jumbotron").html();
    var newStuff = stuff.substring(0, stuff.indexOf("</a>")) + "</a></div></h3>"
    $(".jumbotron").html(newStuff);
})