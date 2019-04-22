var $ = function(id){
    return document.getElementById(id);
}

window.onload = function(){ 
    $("menu-image").src = "Images/"+$("itemName").value + ".jpg";
}