const userEmail = document.querySelector("#email");

if (window.location.href.includes( "/about/success.html" )) {
    const storesEmail = localStorage.getItem('userMail')
    userEmail.textContent = storesEmail
    
}
