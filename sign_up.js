"use strict";
var $ = function(id) {
     return document.getElementById(id); 
};

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function addUserNameAndPassword(){
    var email = $("email").value;
    var password = $("password").value;

    if(validateEmail(email)){
        localStorage.setItem(email, password);
    }else{
        alert("Please enter valid email address");
    }
}

