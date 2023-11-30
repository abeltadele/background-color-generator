const backColors = ["0", "1", "2", "3","4" ,"5","6","7","8","9","A","B","C","D","E","F"];
const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", function(){
  let randomHexColor = "#";
  for(let i = 0; i < 6; i++){
    randomHexColor += backColors[getRandomNumber()];
  }
  document.body.style.backgroundColor = randomHexColor;
  colorEl.textContent = randomHexColor;
});

function getRandomNumber(){
  return Math.floor(Math.random() * backColors.length);
}
