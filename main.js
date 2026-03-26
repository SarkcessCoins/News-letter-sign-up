const
    inputField = document.querySelector('#input'),
    form =document.querySelector("form"),
    userEmail =document.querySelector("#email"),
    errorMessage = document.querySelector(".error-message");


function validateEmail(email) {
    const ragex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return ragex.test(email);
}

// function that handles the submit event
function handleSubmit(e) {
     const value = inputField.value.trim()
      e.preventDefault()
    if (!value) {
        errorMessage.textContent ="Enter Email"
        errorMessage.classList.add("active")

    } else if (!validateEmail(value)) {
        errorMessage.classList.add("active")
    } 
    else {
 // local storage stores  string locally with a key which can be called anything in this case userMail and what its storing 
        localStorage.setItem('userMail', value)
        window.location.href = "about/success.html"
        form.reset()
       
    }
  
   
    
}


if (window.location.href.includes( "/about/success.html" )) {
    const storesEmail = localStorage.getItem('userMail')
    userEmail.textContent = storesEmail
    
}



//events
form.addEventListener("submit", handleSubmit)



 


