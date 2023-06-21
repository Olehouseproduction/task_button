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
  nine.classList.add("active");
  nine.classList.remove("delpink");

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
  elementList = document.querySelectorAll(".only");
  let rand = Math.floor(Math.random() * elementList.length);

  console.log(elementList[rand]);
  return elementList[rand];
  // elementList.splice(rand, 1);
}

function turnsBlue() {
  let randomButton = random();
  randomButton.classList.toggle("blue");
  console.log(randomButton);
  one.classList.remove("delpink");
  two.classList.remove("delpink");
  three.classList.remove("delpink");
  four.classList.remove("delpink");
  five.classList.remove("delpink");
  six.classList.remove("delpink");
  seven.classList.remove("delpink");
  eight.classList.remove("delpink");
  nine.classList.remove("delpink");
}

function invis() {
  four.classList.toggle("invisible");
}

function pulsation() {
  let randomButton = random();
  randomButton.classList.toggle("pulse");
}

function dropping() {
  let i = 0
  let allButton = document.querySelectorAll(".surprise")
  allButton.forEach((item)=>{
    console.log(item, "каждый елемент ", i++)
    item.classList.remove("active")
    item.classList.remove("green")
    item.classList.remove("blue")
    item.classList.remove("pulse")
    item.classList.remove("delpink")
  })

  // let randomButton = random();

  // five.classList.remove("active");
  // one.classList.remove("green");
  // four.classList.remove("green");
  // background.classList.remove("active");
  // three.classList.remove("active");
  // nine.classList.remove("active");
  // nine.classList.remove("pulse");
  // // console.log(randomButton);
  // randomButton.classList.remove("blue");
  // randomButton.classList.remove("pulse");
  // one.classList.remove("blue");
  // two.classList.remove("blue");
  // three.classList.remove("blue");
  // four.classList.remove("blue");
  // five.classList.remove("blue");
  // six.classList.remove("blue");
  // seven.classList.remove("blue");
  // eight.classList.remove("blue");
  // nine.classList.remove("blue");
  // refreshButton.classList.remove("blue");

  // one.classList.remove("pulse");
  // two.classList.remove("pulse");
  // three.classList.remove("pulse");
  // four.classList.remove("pulse");
  // five.classList.remove("pulse");
  // six.classList.remove("pulse");
  // seven.classList.remove("pulse");
  // eight.classList.remove("pulse");
  // nine.classList.remove("pulse");
  // refreshButton.classList.remove("pulse");

  // one.classList.remove("delpink");
  // two.classList.remove("delpink");
  // three.classList.remove("delpink");
  // four.classList.remove("delpink");
  // five.classList.remove("delpink");
  // six.classList.remove("delpink");
  // seven.classList.remove("delpink");
  // eight.classList.remove("delpink");
  // nine.classList.remove("delpink");
  // four.classList.remove("invisible");
}
