const petals=document.querySelectorAll(".petal");

const picker=document.getElementById("picker");

petals.forEach(function(p){

p.onclick=function(){

p.setAttribute("fill",picker.value);

};

});
