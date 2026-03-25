const
    inputField = document.querySelector('.inputField'),
    form =document.querySelector("form"),
    button = document.querySelector(".subscribeBtn"),
    userEmail =document.getElementById("email"),
    errorMessage = document.querySelector(".error-message");


function validateEmail() {
    const ragex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    return ragex.test();
}

// function that handles the submit event
function handleSubmit(e) {
    e.preventDefault()
    if (inputField.value ===" " || inputField.value ==="") {
        errorMessage.classList.toggle("active")
    } else {
        window.location.href="about/success.html"
     }
 }
    

//events
form.addEventListener("submit", handleSubmit)
 


