$(document).ready(function(){
    var ministryPlansVisible = false;
    $("#ministryPlansBtn").click(function(){
        console.log("clicked");
        if(!ministryPlansVisible){
            $("#ministryPlans").append('<iframe id="ministryPlanTimeline" src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Am-af6IxPEyydDJncXRaWDBQclVmbW1iMzVnUjdVd1E&font=Bevan-PotanoSans&maptype=toner&lang=en&height=650" width="100%" height="650" frameborder="0"></iframe>');
            ministryPlansVisible = true;
        }else{
            $("#ministryPlanTimeline").remove();
            ministryPlansVisible = false;
        }
    })
})