// Lela J. Sanchez CSC102 Assignment 2.1: The Building Blocks for Javascript - Functions

function showChoiceModel(choice) 
{
    const playerModelId = `${choice}Model`;
    const computerModelId = 'computerChoiceModel';

    // Hide previous computer choice model
    closeModel('computerChoice');

    // Show player's choice model
    showModel(playerModelId);

    displayImage('playerChoiceImg', `Images/${choice}.jpg`); // Display player's choice image
    

    // Simulate computer making a random choice after a delay
    setTimeout(function() { //setTimeout is a JavaScript function that executes a function after a specified amount of time
        const computerChoice = getRandomChoice(); // returns a random choice for the computer ('rock', 'paper', or 'scissors').
        showModel(computerModelId); // displays the model for the computer's choice.
        displayImage('computerChoiceImage', `Images/${computerChoice}.jpg`); //displayImage is a function that sets the source (src) attribute of an image element with the given ID.
        
        // Determine and display the result
        const result = determineWinner(choice, computerChoice); // determine winner based on player choice and computer choice
        document.getElementById('result').innerText = result; // display result on HTML on <p id="result">
    }, 1000); // change delay based in milliseconds | 1000 milliseconds = (1 second) 
}


function closeModel(choice) 
{
    // Construct the ID of the model element based on the choice
    const modelId = `${choice}Model`;// Uses back-ticks, by tilde key

    // Get the model element using its ID
    const modelElement = document.getElementById(modelId);

    if (modelElement) // if the model element exists
    {
        modelElement.style.display = 'none'; //hide it by setting its display property to 'none'
    }
}

function showModel(choice) 
{
    const modelId = `${choice}Model`; // Construct the ID of the model element based on the choice
    const modelElement = document.getElementById(modelId); // Get the model element using its ID

    if (modelElement) // if model element exists
    {
        modelElement.style.display = 'block'; // show it by setting its display property to 'block'
    }
}

function getRandomChoice() 
{
    // Define an array of choices:
    const choices = ['rock', 'paper', 'scissors'];
    //return choices[Math.floor(Math.random() * choices.length)];

    // Use Math.random() to generate a random index within the length of the choices array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Return the element at the randomly generated index
    return choices[randomIndex];
}

function displayImage(elementId, imagePath) 
{
    const imageElement = document.getElementById(elementId);
    if (imageElement) {
        imageElement.src = imagePath; 
        imageElement.style.display = 'block'; // Ensure the image is set to display
    }
}

function determineWinner(player, computer) 
{
    let resultMessage = ""; // result message is empty since it will be filled in by an if statement...
    if (player === computer) // if same choice
    {
        console.log("It's a tie!"); // print to the console
        resultMessage = "It's a tie!"; // print to HTML doc

        // Week 4: Play tie noise
        mySound = new sound("Audio/tiesound.mp3"); 
        mySound.play();
    } 
    else if ( // all the possible ways computer can beat the player as parameters
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')
    ) 
    {
        console.log('Computer wins!');
        resultMessage = `Computer chose ${computer}. Computer wins!`; // print to HTML doc

        // Week 4: Play losing noise
        mySound = new sound("Audio/losesound.mp3"); 
        mySound.play();
    } 
    else 
    {
        console.log('Player wins!');
        resultMessage = `Computer chose ${computer}. Player wins!`; // print to HTML doc

        // Week 4: Play winning noise
        mySound = new sound("Audio/winsound.mp3"); 
        mySound.play();
    }

    console.log(resultMessage);
    return resultMessage; 
}


// Week 4: Helper function will never change | Always the same
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src; // This is where our source file goes
    this.play = function()
    {
        this.sound.play();
    }
}