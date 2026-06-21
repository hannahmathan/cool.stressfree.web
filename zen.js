const canvas = document.getElementById("sandCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 50;
canvas.height = 550;

ctx.fillStyle = "#E9D8A6";
ctx.fillRect(0,0,canvas.width,canvas.height);

let drawing=false;

canvas.onmousedown=()=>drawing=true;
canvas.onmouseup=()=>{
drawing=false;
ctx.beginPath();
};

canvas.onmousemove=(e)=>{

if(!drawing) return;

ctx.strokeStyle="#B08968";
ctx.lineWidth=8;
ctx.lineCap="round";

ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(e.offsetX,e.offsetY);

};

function clearSand(){

ctx.fillStyle="#E9D8A6";
ctx.fillRect(0,0,canvas.width,canvas.height);

}
