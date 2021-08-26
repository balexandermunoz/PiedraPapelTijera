 

function computerPlay(){
    let choices = ["Piedra","Papel","Tijeras"];
    let randomnumber = Math.round(Math.random()*2);
    return choices[randomnumber]
}

function playerPlay(choice){
    let choices = ["Piedra","Papel","Tijeras"];
    return choices[choice];
}

function oneRound(player,computer){

    if (player == computer){
        mensaje = "EMPATE!"
    }
    else if ((player == "Piedra" && computer == "Tijeras") || (player == "Papel" && computer == "Piedra") || (player == "Tijeras" && computer == "Papel")){
        mensaje = "GANASTE!"
    }
    else{
        mensaje = "PERDISTE!"
    }
    return mensaje
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    let CentinelButton = 0;

    let Rock = document.querySelector('#Rock');
    let Paper = document.querySelector("#Paper");
    let Sissors = document.querySelector("#Sissors");
    let MensajeP = document.querySelector('p');

    let one = 'nada';
    Rock.addEventListener('click', function(){
        let num = 0;
        one = oneRound(computerPlay(),playerPlay(num));
        GanasteOPerdiste(one);
        MensajeP.textContent = "Computer: " + computerCount + " - You: " + playerCount;
        Fin(playerCount,computerCount);
    });

    Paper.addEventListener('click', function(){
        let num = 1;
        one = oneRound(computerPlay(),playerPlay(num));
        GanasteOPerdiste(one);
        MensajeP.textContent = "Computer: " + computerCount + " - You: " + playerCount;
        Fin(playerCount,computerCount);
    });

    Sissors.addEventListener('click', function(){
        let num = 2;
        one = oneRound(computerPlay(),playerPlay(num));
        GanasteOPerdiste(one);
        MensajeP.textContent = "Computer: " + computerCount + " - You: " + playerCount;
        Fin(playerCount,computerCount);
    });

function GanasteOPerdiste(one){
    if (one == "GANASTE!" ){
        playerCount = playerCount + 1;
    }
    if (one == "PERDISTE!" ){
        computerCount = computerCount + 1;
    }
}

function Restart(){
    const ResultsContainer = document.querySelector('.Results');
    let btn = document.createElement("button");
    btn.textContent = "Restart Game";
    ResultsContainer.appendChild(btn); 
    CentinelButton = 1;  //Para NO tener más botones
    btn.addEventListener('click',function(){
 
        history.go(0);
        btn.remove();
    });

container.appendChild(content);
}

function Fin(playerCount,computerCount) {
    let limite = 3;
    if(playerCount == limite){
        Rock.remove();Sissors.remove();Paper.remove();
        MensajeP.textContent = "Game Over. You Win!!!";
        if (CentinelButton == 0) Restart();
    }

    if(computerCount == limite){
        Rock.remove();Sissors.remove();Paper.remove();
        MensajeP.textContent = "Game Over. You Lose!!!";
        if (CentinelButton == 0) Restart();
    }
}
}

game();

