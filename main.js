var answer = prompt("Please select :\nRock  Paper  Scissor ?");
answer = answer.toUpperCase();
var computer = Math.floor(Math.random()*3);



switch(computer){
    case 0 : computer = "ROCK";
    break;
    case 1 : computer = "PAPER";
    break;
    case 2 : computer = "SCISSOR";
    break;
    
}

if(answer == computer){
    document.getElementById("content").innerHTML = "You and Computer both selected "+computer+" Please try again";
}
else if(answer == "ROCK"){
    if(computer == "PAPER"){
        result = " Sorry You Lose! "
    }
    else{
        result = " Congratulation You win!"
    }
}
else if(answer == "PAPER"){
    if(computer == "SCISSOR"){
        result = " Sorry You Lose! "
    }
    else{
        result = " Congratulation You win! "
    }
}
else if(answer == "SCISSOR"){
    if(computer == "ROCK"){
        result = " Sorry You Lose! "
    }
    else{
        result = " Congratulation You win! "
    }
}
else{
    alert("entry is not valid! please try again");
}



 document.getElementById("content").innerHTML = "You  selected "+answer+" and computer selected "+computer+"<br>"+result;



