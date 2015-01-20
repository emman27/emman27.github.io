$(document).ready(function(){
    var ministryPlansVisible = false;
    $("#ministryPlansBtn").onclick(function(){
        if(!ministryPlansVisible){
            $("#ministryPlans").html('<h3>Ministry Plans</h3><button class="btn btn-default" id="ministryPlansBtn">Hide</button><iframe src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Am-af6IxPEyydDJncXRaWDBQclVmbW1iMzVnUjdVd1E&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650" width='100%' height='650' frameborder='0'></iframe>');
            ministryPlansVisible = true;
        }else{
            $("ministryPlans").html('<h3>Ministry Plans</h3><button class="btn btn-default" id="ministryPlansBtn">Show</button>');
        }
    })
})