const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const points = document.getElementById("points");
const result = document.getElementById("result");

const reset = document.getElementById('reset');

console.log(rock);
function player(){
    this.point = 0;
    this.choice = null;
    this.IsWinner = false;
}

let user = new player();
let pc = new player();

rock.onclick = () => {
    user.choice = "rock"
    judge();
}

paper.onclick = () => {
    user.choice = "paper"
    judge();
}

scissors.onclick = () => {
    user.choice = "scissors"
    judge();
}

const judge = function () {
    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0:
            pc.choice = "rock";
            break;
        case 1:
            pc.choice = "paper";
            break;
        case 2:
            pc.choice = "scissors";
            break;
    }

    calculate(user, pc);

    if(user.IsWinner){
        user.point += 1;
        // points.innerText = `${Number(user.points) - Number(pc.points)}`

    }else if(pc.IsWinner){
        pc.point += 1;
    }
    points.innerText = `${user.point - pc.point}`
    result.innerText = `pc has chosed ${pc.choice}`


}

function calculate(user1 = {points, choice, IsWinner}, user2 = {points, choice, IsWinner}) {
    user1.IsWinner = false;
    user2.IsWinner = false;

    if(user1.choice == "rock" && user2.choice == "paper"){
        user2.IsWinner = true;
    }else if(user1.choice == "rock" && user2.choice == "scissors"){
        user1.IsWinner = true;
    }else if(user1.choice == "scissors" && user2.choice == "rock"){
        user2.IsWinner = true;
    }else if(user1.choice == "scissors" && user2.choice == "paper"){
        user1.IsWinner = true;
    }else if(user1.choice == "paper" && user2.choice == "scissors"){
        user2.IsWinner = true;
    }else if(user1.choice == "paper" && user2.choice == "rock"){
        user1.IsWinner = true;
    }
}

// reset function 

reset.onclick = () => {
    points.innerText = ""
    result.innerText = ""

    user.IsWinner = false;
    user.choice = "";
    user.points = 0;

    pc.IsWinner = false;
    pc.choice = "";
    pc.points = 0;

}