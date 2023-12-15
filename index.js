// Lela Sanchez CSC102 - Week 4 - Assignment 4.1: Event Driven Programming


//global variables go here
var interValid = 0; // will be used to reset a timer
let change = 100;
var direction = 1; // 1 for moving down, -1 for moving up
var maxHeight = 725; // how far down i want the image to go before bouncing back.
var minHeight = 100; // how high up I want the image to go before bouning down

function startMove() // This function is called when we click the Start moving button
{
    var image = document.getElementById("imgdog"); // will retrieve image from HTML page
    interValid = setInterval(function() // setInterval is a predefined function used to start the movement of this image
    {
        // Move the image based on the direction
        image.style.left = change + "px"; // need the px for formatting so it must be added
        image.style.top = change + "px";

        // Check for collisions with the screen boundaries
        if (parseInt(image.style.top) > maxHeight || parseInt(image.style.top) < minHeight) 
        {
            // Reverse the direction when a collision is detected
            direction *= -1;
        }

        // Update the change variable based on the direction
        change += 1 * direction;
    },10); // to make it move faster - decrease number | to slow down increase number | BASED IN MILLISECONDS
    // picture hits bottom at about 725px

    // Button Toggling
    document.getElementById("startButton").disabled = true; // Turn off or disable Start button
    document.getElementById("stopButton").disabled = false; // enable the Stop Button
}

function stopMove() // This function is called when we click the Stop moving button
{
    clearInterval(interValid); // clearInterval will stop the movement of the image

    // Button Toggling
    document.getElementById("startButton").disabled = false; // enable the start button 
    document.getElementById("stopButton").disabled = true; // disable the Stop button
}