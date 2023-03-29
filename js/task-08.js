const form = document.querySelector(".login-form");

form.addEventListener("submit", validateLoginForm);

function validateLoginForm(event) {
    event.preventDefault();

    const password = form.elements.password.value;
    const email = form.elements.email.value;

    if(!password || !email){
        alert("Всі поля повинні бути заповнені")
        return
    }

    const formData = {
        email,
        password,
      };
    
      console.log(formData);
    
      form.reset();
}

