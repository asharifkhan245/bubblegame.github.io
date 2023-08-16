var timer = 30;
var score = 0;
var hitrn ;
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
 
function makebubble(){
    var clutter = "";
for(var i = 1; i <=160; i++){

    var rn = Math.floor(Math.random()*10)
clutter += `<div class="bubble">${rn}</div>`

}

document.querySelector("#pbtm").innerHTML = clutter;

}

function runTimer(){

    var time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

function gethit(){

    hitrn =  Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent =  hitrn ;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){

    clickedNumber = Number(details.target.textContent)
    if(clickedNumber === hitrn){
    increaseScore();
    makebubble();
    gethit();

    }

})

runTimer();
gethit();
makebubble();

