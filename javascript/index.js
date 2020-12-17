var player1 = prompt("Enter player 1 name");
var player2 = prompt("Enter player 2 name");
if(!player1){
  player1 = "Player 1";
}
if(!player2){
  player2 = "Player 2";
}
player1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase();
player2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase();
document.querySelector("button.names").addEventListener("click", function(){
  player1 = prompt("Enter player 1 name");
  player2 = prompt("Enter player 2 name");
  player1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase();
  player2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase();
})
document.querySelector("button.toss").addEventListener("click", function(){
  var randomNumber1 = ((Math.random()*6)+1);
  var randomNumber2 = ((Math.random()*6)+1);
  randomNumber1 = Math.trunc(randomNumber1);
  randomNumber2 = Math.trunc(randomNumber2);
  // document.querySelector("h1").style.color = "blue";
  document.querySelector(".dice-image1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  // document.querySelector(".main-heading").innerHTML = "heyy " + randomNumber1;
  document.querySelector(".dice-image2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2)
  {
    document.querySelector(".main-heading").innerHTML = "🥳" + player1 +" won!🏁";
  }else if(randomNumber1 < randomNumber2)
  {
    document.querySelector(".main-heading").innerHTML = "🏁" + player2 +" won!🥳";
  } else {
    document.querySelector(".main-heading").innerHTML = "😈Draw!😈";
  }
})
