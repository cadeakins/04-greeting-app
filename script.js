// Beginner-friendly JavaScript

let button = document.getElementById("welcomeBtn");
let message = document.getElementById("welcomeMsg");
let nameInput = document.getElementById("nameInput"); // Get the input field

button.onclick = function() {
  // Get the user's name from the input field
  let userName = nameInput.value;
  // If the input is empty, show a default message
  if (userName === "") {
    message.textContent = "Please enter your name for a fun welcome!";
  } else {
    // Show a fun personalized message using string concatenation
    message.textContent = "🎉 Welcome, " + userName + "! You are awesome! 🎉";
  }
  // Clear the input field after clicking the button
  nameInput.value = "";
}
