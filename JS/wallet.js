function setBallance() {
    // Get the value from the number input form
    var userInput = document.getElementById("userInputBallance").value;
    
    // Get the paragraph element
    var paragraph = document.getElementById("ballanceDisplay");
    
    // Update the paragraph text based on the user's input
    paragraph.textContent = "Your ballance is: " + userInput;
  }

function alertSetBallance() {
  alert("Please, input your coin first")
}