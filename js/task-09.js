const btnEl = document.querySelector(".change-color")
const hexColorEl = document.querySelector(".color");
btnEl.addEventListener("click",changeColor)

function changeColor() {
  const newColor = getRandomHexColor();
  
  document.body.style.backgroundColor = newColor;
  hexColorEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


