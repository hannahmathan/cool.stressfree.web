const container = document.getElementById("bubbleContainer");

let total = 100;
let popped = 0;

for(let i=0;i<total;i++){

const bubble=document.createElement("div");

bubble.className="bubble";

bubble.onclick=function(){

if(bubble.classList.contains("popped")) return;

bubble.classList.add("popped");

popped++;

if(popped===total){

setTimeout(()=>{

alert("🎉 You popped every bubble!");

},300);

}

}

container.appendChild(bubble);

}
