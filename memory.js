
const emojis = [
"🌸","🌸",
"🦋","🦋",
"🌻","🌻",
"🌿","🌿",
"🍀","🍀",
"🌷","🌷",
"🐼","🐼",
"🐝","🐝"
];

emojis.sort(()=>Math.random()-0.5);

const board=document.getElementById("memoryBoard");

let first=null;
let second=null;
let lock=false;
let matches=0;

emojis.forEach(emoji=>{

const card=document.createElement("div");

card.className="card";

card.dataset.emoji=emoji;

card.innerHTML="?";

card.onclick=()=>flip(card);

board.appendChild(card);

});

function flip(card){

if(lock) return;
if(card===first) return;

card.innerHTML=card.dataset.emoji;
card.classList.add("flipped");

if(!first){

first=card;
return;

}

second=card;

lock=true;

if(first.dataset.emoji===second.dataset.emoji){

matches++;

document.getElementById("matches").textContent=matches;

first=null;
second=null;
lock=false;

if(matches===8){

setTimeout(()=>{

alert("🎉 Congratulations! You matched every card!");

},300);

}

}else{

setTimeout(()=>{

first.innerHTML="?";
second.innerHTML="?";

first.classList.remove("flipped");
second.classList.remove("flipped");

first=null;
second=null;

lock=false;

},800);

}

}
