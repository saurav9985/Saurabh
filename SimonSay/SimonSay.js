let gameSeq = [];
let userSeq = [];
let btns=["red","green","blue","yellow"]

let started = false;
let level = 0;

let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started= true;

        levelUP();
    }  
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function levelUP(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor =btns[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}


function checkAns(idx) {
    // console.log("curr level: ",level);
    //let idx =level-1;
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            levelUP();
        }
    } else {
        h2.innerHTML =`game over! your score is <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="dimgray";
             document.querySelector("body").style.color="black";
        },250 )
        reset();
    }
}


function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
     
    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".item");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}