// app.js
function displayGreeting() {
    var nameInput = document.getElementById("nameInput").value;
    
    if (nameInput.trim() !== "") {
        alert("Hello, " + nameInput + "! Welcome to JavaScript.");
    } else {
        alert("Please enter your name.");
    }
}
