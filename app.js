let  userScore = 0;
let  compScore = 0;

let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('#msg')

let uScore = document.querySelector('#user-score');
let cScore = document.querySelector('#comp-score');


const drawGame = () => {
    msg.innerHTML = "your game is Draw";
    msg.style.backgroundColor = '#081b31';
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerHTML = userScore;
        msg.innerHTML = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        cScore.innerHTML = compScore;
        msg.innerHTML = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log('userchoice is =', userChoice);
    let  compChoice = genCompChoice();
    console.log('compchoice is =', compChoice);

    if( userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)  => {
 choice.addEventListener("click",()  => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
      
 })
})