let userScore=0;
let compScore=0;

let userScorePoint= document.querySelector("#userScore");
let compScorePoint= document.querySelector("#compScore");
let userNameTest= window.prompt("Enter Your name");
let userName= document.querySelector("#userName");

userName.innerText= userNameTest;
let choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");

choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    let userChoice= choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice=()=>{
  const options= ["rock", "paper", "scissor"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
}
const matchDraw= ()=>{
  msg.innerHTML= "Game Draw! Play again";
  msg.style.backgroundColor= "rgb(12, 30, 65)";

}
const showWinner= (userWin,userChoice,compChoice)=>{
  if(userWin==true){
    msg.innerHTML= `${userNameTest} Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor= "green";
    userScore++;
    userScorePoint.innerText= userScore;
  }
  else{
    msg.innerHTML= `Computer Win! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor= "red";
    compScore++;
    compScorePoint.innerText= compScore;

  }
}
const playGame= (userChoice)=>{
  console.log("User", userChoice);
  let compChoice= genCompChoice();
  console.log("comp", compChoice);

  if(userChoice ===compChoice){
    matchDraw();
  }
  else{
    userWin= true;
    if(userChoice === "rock"){
      // paper, scissors
      userWin= compChoice === "paper"? false:true
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin= compChoice === "rock"?true:false
    } else {
      // userchoice= "scissor" remaining= paper, rock
      userwin= compChoice ==="paper"?true:false
    }
    showWinner(userWin,userChoice,compChoice);
}
}