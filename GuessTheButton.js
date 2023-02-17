let randomNumber = Math.floor(Math.random() * 3) + 1;
const text = document.getElementById("shareText");

function pressButton(id){
    if(id == randomNumber){
        text.innerHTML = "You win!";
    }else{
        text.innerHTML = "You lose!";
    }
}
console.log(randomNumber);