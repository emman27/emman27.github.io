$(document).ready(function(){
    var stuff = $(".jumbotron").html();
    console.log(stuff.substring(0, stuff.indexOf("</a>")) + "</a></div></h3>");
    var newStuff = stuff.substring(0, stuff.indexOf("</a>")) + "</a></div></h3>"
    $(".jumbotron").html(newStuff);
    console.log($(".jumbotron"));
    console.log($(".jumbotron").html());
})