
const counter = document.querySelector("#value")
const incrementBtn = document.querySelector(`button[data-action="increment"]`)
const decrementBtn = document.querySelector(`button[data-action="decrement"]`)
let counterValue = 0;

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)


function increment (event) {
    counterValue += 1;
    counter.textContent = counterValue;
}

function decrement (event) {
    counterValue -= 1;
    counter.textContent = counterValue;
}
