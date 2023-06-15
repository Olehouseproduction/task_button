let one = document.querySelector(".surprise1");
let two = document.querySelector(".surprise2");
let three = document.querySelector(".surprise3");
let four = document.querySelector(".surprise4");
let five = document.querySelector(".surprise5");
let background = document.querySelector("body");
let six = document.querySelector(".surprise6");
let seven = document.querySelector(".surprise7");
let eight = document.querySelector(".surprise8");
let nine = document.querySelector(".surprise9");
let refreshButton = document.querySelector(".refresh");

function turnsRed() {
  nine.classList.toggle("active");
}

function turnsGreen() {
  one.classList.toggle("active");
  four.classList.toggle("active");
}

function cancelSecond() {
  one.classList.remove("active");
  four.classList.remove("active");
}

function canselFirst() {
  nine.classList.remove("active");
}

function removeAllPink() {
  five.classList.remove("active");
  one.classList.remove("active");
  four.classList.remove("active");
  background.classList.remove("active");
  three.classList.remove("active");
  nine.classList.remove("pulse");

  one.classList.toggle("delpink");
  two.classList.toggle("delpink");
  three.classList.toggle("delpink");
  four.classList.toggle("delpink");
  five.classList.toggle("delpink");
  six.classList.toggle("delpink");
  seven.classList.toggle("delpink");
  eight.classList.toggle("delpink");
  nine.classList.toggle("delpink");
}

function turnsPurple() {
  background.classList.toggle("active");
}

function turnsBlue() {
  three.classList.toggle("active");
}

function invis() {
  four.classList.toggle("invisible");
}

function pulsation() {
  nine.classList.toggle("pulse");
}

function dropping() {
  five.classList.remove("active");
  one.classList.remove("active");
  four.classList.remove("active");
  background.classList.remove("active");
  three.classList.remove("active");
  nine.classList.remove("active");
  nine.classList.remove("pulse");

  one.classList.remove("delpink");
  two.classList.remove("delpink");
  three.classList.remove("delpink");
  four.classList.remove("delpink");
  five.classList.remove("delpink");
  six.classList.remove("delpink");
  seven.classList.remove("delpink");
  eight.classList.remove("delpink");
  nine.classList.remove("delpink");
  four.classList.remove("invisible");
}
