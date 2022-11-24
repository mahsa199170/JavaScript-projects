randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
// we could also this:
// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1+".png");
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2+".png");


if(randomNumber1 > randomNumber2){
  // here because we only have one h1, we used queryselector,
  // but in line 4 and 5 because we had more than one image we
  // chose querySeelectorAll, although we could use querySelector(".img1") also.
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){

  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
