var playerContainer = document.getElementById('player-hand-container');
var cpuContainer = document.getElementById('cpu-hand-container');
var CPU_hand = 0;
var PLAYER_hand = 0;
var cpuPoint = document.getElementById('cpu-point');
var playerPoint = document.getElementById('player-point');
var CPU = 0 ;
var PLAYER = 0;
var result = document.getElementById('WINS');
var final = document.getElementById('finalResult')
var hand 
function handSelect( eleId){
    CPU_hand = Math.floor(Math.random() * 3) + 1;
    hand = document.getElementById(eleId);
    console.log(hand);
    console.log(eleId);
    switch(CPU_hand){
        case 1: cpuContainer.src = "./static/assets/stone.png"; break;
        case 2: cpuContainer.src = "./static/assets/paper.png" ; break;
        case 3: cpuContainer.src = "./static/assets/scissors.png" ; break;
    }
    if(eleId == "stone")
    {
        playerContainer.src="./static/assets/stone.png"
        PLAYER_hand = 1;
    }
    else if(eleId == "paper")
    {
        playerContainer.src="./static/assets/paper.png"
        PLAYER_hand = 2;
    }
    else if(eleId == "scissors")
    {
        playerContainer.src="./static/assets/scissors.png"
        PLAYER_hand= 3;
    }
    if(PLAYER_hand == CPU_hand){
        result.innerText = "TIE"
    }
    else if(PLAYER_hand == 1 && CPU_hand == 2){
        result.innerText = "CPU"
        CPU = CPU + 1;
        cpuPoint.innerText = CPU;
        if(CPU == 5){
            final.innerText = "CPU WINS!"
            
        }
    }
    else if(PLAYER_hand == 1 && CPU_hand == 3){
        result.innerText = "YOU"
        PLAYER = PLAYER + 1
        playerPoint.innerText = PLAYER
        if(PLAYER == 5){
            final.innerText = "YOU WINS!"

        }
    }
    else if(PLAYER_hand == 2 && CPU_hand == 1){
        result.innerText = "YOU"
        PLAYER = PLAYER + 1
        playerPoint.innerText = PLAYER
        if(PLAYER == 5){
            final.innerText = "YOU WINS!"

        }
    }
    else if(PLAYER_hand == 2 && CPU_hand == 3){
        result.innerText = "CPU"
        CPU = CPU + 1;
        cpuPoint.innerText = CPU;
        if(CPU == 5){
            final.innerText = "CPU WINS!"

        }
    }
    else if(PLAYER_hand == 3 && CPU_hand == 1){
        result.innerText = "CPU"
        CPU = CPU + 1;
        cpuPoint.innerText = CPU;
        if(PLAYER == 5){
            final.innerText = "CPU WINS!"

        }
    }
    else if(PLAYER_hand == 3 && CPU_hand == 2){
        result.innerText = "YOU"
        PLAYER = PLAYER + 1
        playerPoint.innerText = PLAYER
        if(CPU == 5){
            final.innerText = "YOU WINS!"

        }
    }
}
function restart(){
    CPU = 0;
    PLAYER = 0;
    cpuContainer.src = "./static/assets/cContainer.png"
    playerContainer.src = "./static/assets/pContainer.png";
    playerPoint.innerText = PLAYER
    cpuPoint.innerText = CPU;
    final.innerText = ""
}