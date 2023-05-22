const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validateInput);

function validateInput() {
    const isValidValue = inputEl.value.length === Number(inputEl.getAttribute("data-length"));


if (isValidValue) {``
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
}else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
} 

}

