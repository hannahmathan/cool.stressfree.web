const greetings=[

"🌸 Welcome! Ready to relax?",

"💙 Take a deep breath and choose an activity.",

"🌿 Your peaceful space is waiting.",

"✨ Relax. Recharge. Smile.",

"😊 Today is a good day to unwind."

];

document.getElementById("welcomeText").innerHTML=

greetings[Math.floor(Math.random()*greetings.length)];
