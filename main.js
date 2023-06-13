let firstButton = document.querySelector(".surprise1");
let secondButton = document.querySelector(".surprise2");
let thirdButton = document.querySelector(".surprise3");
let fourthButton = document.querySelector(".surprise4");
let fifthButton = document.querySelector(".surprise5");
let refreshButton = document.querySelector(".refresh");

function turnsRed() {
  fifthButton.classList.toggle("active");
}

function turnsGreen() {
  firstButton.classList.toggle("active");
  fourthButton.classList.toggle("active");
}

function cancelSecond() {
  firstButton.classList.remove("active");
  fourthButton.classList.remove("active");
}

function canselFirst() {
  fifthButton.classList.remove("active");
}

function removeAllPink() {
  fifthButton.classList.remove("active");
  firstButton.classList.remove("active");
  fourthButton.classList.remove("active");

  firstButton.classList.toggle("delpink");
  secondButton.classList.toggle("delpink");
  thirdButton.classList.toggle("delpink");
  fourthButton.classList.toggle("delpink");
  fifthButton.classList.toggle("delpink");
}

function dropping() {
  fifthButton.classList.remove("active");
  firstButton.classList.remove("active");
  fourthButton.classList.remove("active");

  firstButton.classList.remove("delpink");
  secondButton.classList.remove("delpink");
  thirdButton.classList.remove("delpink");
  fourthButton.classList.remove("delpink");
  fifthButton.classList.remove("delpink");
  refreshButton.classList.remove("delpink");
}
