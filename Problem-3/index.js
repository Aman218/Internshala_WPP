let randomNumber=Math.floor(Math.random()*10+1);
console.log(randomNumber);

let userGuess=prompt("Guess a number between 1 to 10");
console.log(typeof(userGuess))//it will be string
if(userGuess==randomNumber){
    console.log("Good Work");
}
else{
    console.log("Not Matched");
}
