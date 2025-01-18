//your JS code here. If required.
// JavaScript code to determine the DOM level of the element with id 'level'

// Get the element with the id 'level'
const targetElement = document.getElementById("level");

if (targetElement) {
    let level = 0;
    let currentElement = targetElement;

    // Traverse up the DOM tree and count the levels
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    // Display the result using alert
    alert(`The level of the element is: ${level}`);
} else {
    alert("The element with id 'level' was not found in the DOM.");
}
