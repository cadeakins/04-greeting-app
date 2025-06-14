// Beginner-friendly JavaScript

let userName = "Cade"; 

let button = document.getElementById("welcomeBtn");
let message = document.getElementById("welcomeMsg");

button.onclick = function() {
  // Show a welcome message using string concatenation
  message.textContent = "Welcome! " + userName;
}
