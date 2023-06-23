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
let ten = document.querySelector(".surprise10");

function turnsRed() {
  nine.classList.add("active");
  nine.classList.remove("delpink");
}

function turnsGreen() {
  one.classList.add("green");
  four.classList.add("green");

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

  one.classList.add("delpink");
  two.classList.add("delpink");
  three.classList.add("delpink");
  four.classList.add("delpink");
  five.classList.add("delpink");
  six.classList.add("delpink");
  seven.classList.add("delpink");
  eight.classList.add("delpink");
  nine.classList.add("delpink");
  ten.classList.add("delpink");
}

function turnsPurple() {
  background.classList.add("active");
  background.classList.remove("active2");
}

function random(selector) {
  elementList = document.querySelectorAll(selector);
  let rand = Math.floor(Math.random() * elementList.length);
  console.log(elementList[rand]);
  return elementList[rand];
}

function turnsBlue() {
  let randomButton = random(".only:not(.blue)");
  randomButton.classList.add("blue");
  randomButton.classList.remove("delpink");
  randomButton.classList.remove("active");
  randomButton.classList.remove("pulse");
}

function invis() {
  let randomButton = random(".only:not(.invisible)");
  randomButton.classList.add("invisible");
}

function pulsation() {
  let randomButton = random(".only:not(.pulse)");
  randomButton.classList.add("pulse");
}

function ripple() {
  ten.classList.toggle("active");
}

function dropping() {
  let i = 0;
  let allButton = document.querySelectorAll(".surprise");
  allButton.forEach((item) => {
    console.log(item, "каждый элемент", i++);
    item.classList.remove("active");
    item.classList.remove("green");
    item.classList.remove("blue");
    item.classList.remove("pulse");
    item.classList.remove("delpink");
    item.classList.remove("active");
    item.classList.remove("invisible");
  });
  background.classList.remove("active");
  background.classList.add("active2");
}
