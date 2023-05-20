const boxes = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");
const createBtnEl = document.querySelector(`button[data-create]`);
const destroyBtnEl = document.querySelector(`button[data-destroy]`);

createBtnEl.addEventListener("click", () => {
  const amount = inputEl.value;
  
  if(!checkInputValidity(amount)){
    alert(`Введіть значення від ${inputEl.min} до ${inputEl.max}`)
    return 
  }
  
  createBoxes(amount)
});
destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const step = Number(inputEl.step);
  let size = 30;

  for (let index = 0; index < amount; index = index + step) {
    boxes.append(document.createElement("div"));
    
    boxes.lastChild.style.backgroundColor = getRandomHexColor();
    boxes.lastChild.style.width = size + "px";
    boxes.lastChild.style.height = size + "px"
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function checkInputValidity(value) {
  const isValidValue = Number(value) >= Number(inputEl.min) && Number(value) <= Number(inputEl.max); 

  if(!isValidValue ||!value){
    return false;
  }

  return true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
