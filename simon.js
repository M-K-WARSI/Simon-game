let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];  // koi bhe random button ko choose karne k lye ye array banai hai humlog

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started==false){
console.log("Game is started");
started = true;
levelUp(); //jaise hi mera game start ho gya mera level up kar do
    }
});

function gameFlash (btn) { 
    btn.classList.add("flash");   // css main humne ye flash name ki class main property set rakhi hai background ki color white hone ka..
    setTimeout(function() {    // ab hum yahan timer lagai hai k ye itne time main ye phir apne original color ko retain kar le..
        btn.classList.remove("flash");
    }, 250);  
}

function userFlash (btn) { 
    btn.classList.add("userFlash");   // css main humne ye flash name ki class main property set rakhi hai background ki color white hone ka..
    setTimeout(function() {    // ab hum yahan timer lagai hai k ye itne time main ye phir apne original color ko retain kar le..
        btn.classList.remove("userFlash");
    }, 250);  
}

function levelUp(){
    userSeq = [];
    level++;
h2.innerText = `level ${level}`;

let randIdx = Math.floor( Math.random()* 3); // humne jo btns array banaya hai isme se koi bhe ek index ko choose karna hai random
let randColor = btns[randIdx]; //yahan hum koi bhe random color chose kar liye hai
let randBtn = document.querySelector(` .${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    } else{
        h2.innerHTML = `Game Over ! your score was <b>${level}</b> <br> press Any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress () {
    let btn = this;  // koun sa button press hua woh samaj aa jayega
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnPress); // koi bhe agar button press hoga toh hum function call kar lenge btnPress ko
}
function reset() {
    started = false ;
    gameSeq = [];
    userSeq = [];
    level = 0;
}