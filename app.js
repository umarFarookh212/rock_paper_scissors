let userChoice=0;
let compChoice=0;

let choices= document.querySelectorAll(".choice");

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
  console.log("draw");
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
    if(userChoice==="rock"){
      // paper scissor
      userWin= compChoice==="paper"?false:true;
    }
    else if (userChoice === "scissor") {
      // rock scissor
      userWin = compChoice ==="rock"? true:false
    } else {
      // rock paper
      // userWin= compChoice === ""?
    }
  }
}