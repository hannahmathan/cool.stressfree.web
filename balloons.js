const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let score = 0;

function createBalloon(){

const balloon = document.createElement("div");

balloon.className = "balloon";

balloon.style.left = Math.random()*90 + "%";

balloon.style.background =
["red","blue","green","orange","purple","pink"][Math.floor(Math.random()*6)];

game.appendChild(balloon);

let bottom = -100;

const move = setInterval(()=>{

bottom+=3;

balloon.style.bottom = bottom+"px";

if(bottom>window.innerHeight){

clearInterval(move);

balloon.remove();

}

},20);

balloon.onclick=()=>{

score++;

scoreText.textContent=score;

balloon.style.transform="scale(1.5)";
balloon.style.opacity="0";

clearInterval(move);

setTimeout(()=>balloon.remove(),200);

};

}

setInterval(createBalloon,800);
