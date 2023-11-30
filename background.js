const backColors = ["red", "green", "blue", "rgb(4, 3, 255)"];
const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", function(){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = backColors[randomNumber];
  colorEl.textContent = backColors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * backColors.length);
}
