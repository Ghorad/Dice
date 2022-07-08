// Random Numbers

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Dice 1

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// Dice 2

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Result

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else if (randomNumber1 = randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}
