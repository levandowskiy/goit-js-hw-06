const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validateInput);

function validateInput() {
    if(inputEl.value.length < inputEl.getAttribute("data-length")) {
       return inputEl.setAttribute("class", "invalid");
    }

    return inputEl.setAttribute("class", "valid");
}

