// Assignment 3.1: Palindrome Checker | Lela J. Sanchez

function isPalindrome(str)
{
    // create a constant/variable to hold our cleaned string that replaces 
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // ^ is a negation or negated character class. It matches any character not listed in the character set.
    // /[^a-zA-Z0-9]/ matches any non-alphanumeric character (e.g., special characters, punctuation, spaces).
    // The g flag ensures that it replaces all occurrences in the string.

    // check if cleanedStr is equal to its reverse by using ===
    return cleanedStr === cleanedStr.split("").reverse().join(""); // return the reversed string using the reverse() method!
    // .split("") Splits the cleaned string into an array of chars
    // .reverse() Reverses the order of the elements in the array
    // .join("") Joins the reversed array back into a string
}

function checkPalindrome()
{
    const userInput = document.getElementById("inputString").value.trim(); // trim() method removes white space from both ends of a string, but not anywhere in between

    if (userInput === "") // If the user did not enter anything...
    {
        alert("INVALID INPUT! Please enter a valid string."); // alert to invalid input then return
        return;
    }

    let resultMessage;

    // check if the userInput is a Palindrome
    if (isPalindrome(userInput)) // takes in the userInput as the str/string parameter
    {
        resultMessage = "The entered string is a palindrome. Congratulations!";
    }
    else // if it is not a Palindrome OR equal to itself spelled backwards...
    {
        resultMessage = "The entered string is NOT a palindrome. Try Again!";
    }
    alert(resultMessage);

    document.getElementById("results").innerHTML = "You entered: " + userInput + " | Result: " + resultMessage; // concatination of strings
}

// Assignment 3.2: User Input Validation
function checkCreds()
{
    // Hold the variables under const for inputted data so it remains the same
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    var combinedName = firstName + " " + lastName;


    const zipCode = document.getElementById("zipCode").value;

    // if form has started to be filled out...
    if (combinedName.length > 0 && zipCode.length > 0) 
    {
        // if the length of combinedName is more than 20, try again
        if (combinedName.length > 20) 
        {
            alert("The entered name must be less than 20 characters.");
        }

        // if zipcode is not 5 in length, display an alert
        if (zipCode.length != 5) // we want zipcode to ONLY be 5 digits long
        {
            alert("The zip code must be 5 digits.");
        }
    
        // Check if all required conditions are met
        if (combinedName.length < 20 && zipCode.length == 5)
        {
            // hold location of secret message here
            var secretMessage = document.getElementById("secretMessage"); 

            // create an image element
            var img = document.createElement("img");

            // Set the source (URL) of image
            img.src = "Images/secretMessagePNG.png"; // Not working unsure why????
            img.alt = "secretMessageImg";

            // Append the image to the div
            secretMessage.appendChild(img);

            // Creates a <p></p> on the HTML document
            var paragraph = document.createElement("p"); 

            // set the text of the paragraph
            paragraph.textContent = "You have unlocked the secret! Keep it up!";

            //Append the paragraph to the div
            secretMessage.appendChild(paragraph);
        }
    }
    else // If nothing is entered into the form
    {
        alert("Please input into the form before pressing submit");
    }
    
}

function playBackgroundMusic()
{
    var audio = document.getElementById("backgroundMusic"); // get the music from the HTML document
    audio.play(); // play the music
}


// Helper function will never change | Always the same
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src; // This is where our source file goes
    this.play = function()
    {
        this.sound.play();
    }
}