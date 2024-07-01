var timer=60;
var score=0;

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function hitBubble(){
     var rn = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent=rn;
}




function MakeBubble(){
    var clutter="";

for(var i=1;i<=138;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer(){
    var timerint=setInterval(function()  {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }else{
        clearInterval(timerint);
    }

    }, 1000);
}


runTimer();
MakeBubble();
hitBubble();
increasescore();
