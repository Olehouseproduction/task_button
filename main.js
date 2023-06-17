//Создаю массив из кнопок

// buttonList = [
//   { button1: "one" },
//   { button2: "two" },
//   { button3: "three" },
//   { button4: "four" },
//   { button5: "five" },
//   { button6: "six" },
//   { button7: "seven" },
//   { button8: "eight" },
//   { button9: "nine" },
// ];

let one = document.querySelector(".surprise1");
let two = document.querySelector(".surprise2");
let three = document.querySelector(".surprise3");
let four = document.querySelector(".surprise4");
let five = document.querySelector(".surprise5");
let six = document.querySelector(".surprise6");
let seven = document.querySelector(".surprise7");
let eight = document.querySelector(".surprise8");
let nine = document.querySelector(".surprise9");
let refreshButton = document.querySelector(".refresh");
let background = document.querySelector("body");

/*Несмотря на то, что NodeList не является массивом ( Array ), его вполне возможно перебрать при помощи метода forEach(). NodeList также можно конвертировать в Array при помощи Array.from()*/

function turnsRed() {
  nine.classList.toggle("active");
  // nine.classList.toggle("delpink");
}

function turnsGreen() {
  one.classList.toggle("green");
  four.classList.toggle("green");
  one.classList.remove("delpink");
  four.classList.remove("delpink");
}

function cancelSecond() {
  one.classList.remove("green");
  four.classList.remove("green");
}

function canselFirst() {
  nine.classList.remove("active");
}

function removeAllPink() {
  dropping();

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

function random() {
  elementList = document.querySelectorAll(".surprise");
  let rand = Math.floor(Math.random() * elementList.length);
  // elementList[rand];
  return elementList[rand];
  // elementList.splice(rand, 1);
}
console.log(elementList[rand]);

function turnsBlue() {
  let randomButton = random();
  randomButton.classList.toggle("blue");
}

function invis() {
  four.classList.toggle("invisible");
}

function pulsation() {
  random();
  nine.classList.toggle("pulse");
}

function dropping() {
  document.querySelectorAll(".surprise");
  five.classList.remove("active");
  one.classList.remove("green");
  four.classList.remove("green");
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
