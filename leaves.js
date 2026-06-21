const game = document.getElementById("leafGame");
const scoreText = document.getElementById("score");

let score = 0;

function createLeaf(){

const leaf=document.createElement("div");

leaf.className="leaf";

leaf.innerHTML=["🍁","🍂","🍃"][Math.floor(Math.random()*3)];

leaf.style.left=Math.random()*95+"%";

game.appendChild(leaf);

let topPos=-60;
let sway=0;

const fall=setInterval(()=>{

topPos+=2;
sway+=0.1;

leaf.style.top=topPos+"px";
leaf.style.transform=`translateX(${Math.sin(sway)*25}px) rotate(${topPos}deg)`;

if(topPos>window.innerHeight){

clearInterval(fall);
leaf.remove();

}

},20);

leaf.onclick=()=>{

score++;

scoreText.textContent=score;

leaf.style.fontSize="60px";
leaf.style.opacity="0";

clearInterval(fall);

setTimeout(()=>leaf.remove(),200);

};

}

setInterval(createLeaf,900);
