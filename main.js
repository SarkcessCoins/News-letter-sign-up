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
 


// funstion to handle the button clicked event
function buttonClick(e) {
  
    if (inputField.value === " " || inputField.value === "") {
         e.preventDefault()
        errorMessage.classList.add("active")
    } else {
       
       
     }
 }
    

//events
form.addEventListener("submit", handleSubmit)
button.addEventListener("click", buttonClick)
 


