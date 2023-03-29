const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output")

inputEl.addEventListener("input", displayUserName)

function displayUserName() {
    nameOutputEl.textContent = inputEl.value;
    
    if(inputEl.value === "") {
        nameOutputEl.textContent = "Anonymous";
    }  
}