const
    inputField = document.querySelector('.inputField'),
    form =document.querySelector("form"),
    button = document.querySelector(".subscribeBtn"),
    userEmail =document.getElementById("email"),
    errorMessage = document.querySelector(".error-message");


function validateEmail(email) {
    const ragex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return ragex.test(email);
}

// function that handles the submit event
function handleSubmit(e) {
     const value = inputField.value.trim()
      e.preventDefault()
    if (inputField.value === " " || inputField.value === "") {
        errorMessage.textContent ="Enter Email"
        errorMessage.classList.add("active")

    } else if (!validateEmail(value)) {
    
        errorMessage.classList.add("active")
    } 
    else {
        window.location.href="about/success.html"
       
     }
}


    

//events
form.addEventListener("submit", handleSubmit)

 


