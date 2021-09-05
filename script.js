 
 // ---- // --- Old code 

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
    let options = ['Piedra','Papel','Tijeras'];
    let playerCount = 0;
    let computerCount = 0;
    let CentinelButton = 0;

    let Rock = document.querySelector('#Rock');
    let Paper = document.querySelector("#Paper");
    let Sissors = document.querySelector("#Sissors");

    let RockC = document.querySelector('#RockC');
    let PaperC = document.querySelector("#PaperC");
    let SissorsC = document.querySelector("#SissorsC");

    let MensajeP = document.querySelector('p');
    let elementB1 = document.querySelector('.Images1__b');
    let elementB2 = document.querySelector('.Images2__b');

    let one = '';

    function Transition(PC,Player){
        if(Player == 'Piedra' ){ s = Rock; o1 = Sissors; o2 = Paper};
        if(Player == 'Papel'  ){ o1 = Rock; o2 = Sissors; s = Paper};
        if(Player == 'Tijeras'){ o1 = Rock; s = Sissors; o2 = Paper};

        if(PC == 'Piedra' ){ sc = RockC; o1c = SissorsC; o2c = PaperC};
        if(PC == 'Papel'  ){ o1c = RockC; o2c = SissorsC; sc = PaperC};
        if(PC == 'Tijeras'){ o1c = RockC; sc = SissorsC; o2c = PaperC};

        let dur = 3000; //Duration of the animation

        s.animate([
            // keyframes
            { transform: 'translateY(0px)'   },
            { transform: 'translateY(142px)' },
            { transform: 'translateY(142px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: dur,
            iterations: 1
          });

          sc.animate([
            // keyframes
            { transform: 'translateY(0px)'   },
            { transform: 'translateY(-142px)' },
            { transform: 'translateY(-142px)' },
            { transform: 'translateY(0px)' }
          ], {
            // timing options
            duration: dur,
            iterations: 1
          });
          

        o1.animate({opacity: 0 }, dur);
        o2.animate({opacity: 0 }, dur);
        o1c.animate({opacity: 0 }, dur);
        o2c.animate({opacity: 0 }, dur);
        elementB1.animate({opacity: 0 }, dur);
        elementB2.animate({opacity: 0 }, dur);
    }

    function OneGame(Player_choice){

        let PC_choice = options[Math.round(Math.random()*2)]; //Random number computer play. 
        one = oneRound(Player_choice,PC_choice);

        GanasteOPerdiste(one);
        MensajeP.textContent = "Computer: " + computerCount + " - You: " + playerCount;
        Fin(playerCount,computerCount);
        Transition(PC_choice,Player_choice);
    }

    Rock.addEventListener('click',function(){
        OneGame('Piedra') });
    Paper.addEventListener('click',function(){
        OneGame('Papel') });
    Sissors.addEventListener('click',function(){
        OneGame('Tijeras') });

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
        RockC.remove();SissorsC.remove();PaperC.remove();
        elementB1.remove();elementB2.remove();
        MensajeP.textContent = "Game Over. You Win!!!";
        if (CentinelButton == 0) Restart();
    }

    if(computerCount == limite){
        Rock.remove();Sissors.remove();Paper.remove();
        RockC.remove();SissorsC.remove();PaperC.remove();
        elementB1.remove();elementB2.remove();
        MensajeP.textContent = "Game Over. You Lose!!!";
        if (CentinelButton == 0) Restart();
    }
}
}

game();

