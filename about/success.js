const userEmail = document.querySelector("#email");

const storesEmail = localStorage.getItem('userMail')
if (!storesEmail) {
        window.location.href ='/index.html'
} else {
      userEmail.textContent = storesEmail
    }
  