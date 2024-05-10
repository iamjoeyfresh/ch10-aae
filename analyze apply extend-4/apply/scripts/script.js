/*
    Joseph Sutton
    File Name: script.js
    Current Date: 5/9/24
*/

// Function to display content
function content() {
    var text = document.getElementById("new");
    text.textContent = "Hi. I am a new paragraph that was created with a JavaScript function.";
    text.style.color = "#c0145f";
    text.style.fontSize = "2em";
}

document.getElementById('btn').addEventListener('click', content);