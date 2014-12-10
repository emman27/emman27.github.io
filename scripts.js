/**
 * Created by Emmanuel on 9/12/2014.
 */

function verifyName(){
    if($("#inputName").val().length === 0){
        alert("Please input a name");
        return false;
    }
    return true;
}

function verifyEmail(){
    if($("#inputEmail").val().length === 0 || !isLegitEmail()){
        alert("Please input a legit email");
        return false;
    }
    return true;
}

function isLegitEmail(address){
    var postfix = ["@hotmail.com", "@gmail.com", "@nus.edu.sg"];
    for(var i=0; i<postfix.length; i++) {
        if(address.length > postfix[i].length){
            if (address.substr(address.length - postfix[i].length) === postfix[i]) {
                return true;
            }
        }
    }
    return false;
}

function bindSubmitButton(){
    var submitBtn = $("#submitBtn");
    var legit;
    submitBtn.click(
        function(){
            legit = verifyName();
            legit = legit || verifyEmail();
            if(legit === true){
                alert("Successfully submitted");
            }
        }
    )
}

function disableSubmitIfEmpty(){
    var submit = $("#submitBtn");
    var email = $("#inputEmail");
    if($("#inputName").val().length === 0 || email.val().length === 0 || !isLegitEmail(email.val())){
        submit.attr("disabled", "disabled");
    }else{
        submit.removeAttr("disabled");
    }
}

function constantVerify(){
    var name = $("inputName");
    var email = $("#inputEmail");
    name.keyup(function(){disableSubmitIfEmpty();});
    email.keyup(function(){disableSubmitIfEmpty();});
}

$(document).ready(
    function(){
        bindSubmitButton();
        constantVerify();
        disableSubmitIfEmpty();
    }
)