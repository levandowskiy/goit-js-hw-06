const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validateInput);

function validateInput() {
    const isValidValue = inputEl.value.length === Number(inputEl.getAttribute("data-length"));

    if(isValidValue) {
        return inputEl.setAttribute("class", "valid");
    }

    return inputEl.setAttribute("class", "invalid");
}

