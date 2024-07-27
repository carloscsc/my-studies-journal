/**
 * Notice: The documentation in this code has been enhanced with the help of
 * an AI tool to improve clarity and completeness. Only the documentation
 * was generated with AI. This code was created for study purposes, and using
 * GPT for detailed documentation aims to facilitate my future reference and
 * assist anyone else who uses this code for the same purpose.
 */

// Input field where the generated password will be displayed
const resultField = document.getElementById("field-el");

// Form element containing password generation options
const form = document.getElementById("password-options");

// Set an object with all types of characters allowed for password generation
const charactersTypes = {
    // Array of uppercase letters
    capital: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z"],
    // Array of lowercase letters
    tiny: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
        "x", "y", "z"],
    // Array of digits
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    // Array of special characters
    special: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+",
        ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
        "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
}

/**
 * Generates a random index based on the array length.
 * @param {Array} arr - The array to generate the random index from.
 * @returns {number} - A random index within the array.
 */
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

/**
 * Gets a random value from a nested array.
 * @param {Array} arr - The array containing nested arrays to select a random value from.
 * @returns {string} - A random value from one of the nested arrays.
 */
function randomValue(arr) {
    const array = arr[randomIndex(arr)];
    return array[randomIndex(array)];
}

/**
 * Form submit event listener
 */
form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Extract the form data
    const formData = new FormData(e.target);
    // Array to hold selected character types for password generation
    const characters = [];
    // Initialize the password as an empty string
    let password = "";

    // Iterate over the formData.entries and if the value is true, push
    // the corresponding characters array
    for (let [key, value] of formData.entries()) {
        if (value === "true") {
            // Add selected character types to the characters array
            characters.push(charactersTypes[key]);
        }
    }
    
    /**
     * In case no options were selected, clear all the fields and show
     * a message.
     */
    if (characters.length <= 0) {
        resultField.value = 'Select at least one type of character'
        return;
    }

    // Retrieve password length from form data
    const passLengthStr = formData.get('size');

    // Replace non-numeric chars with empty string using regex
    const validPassLength = passLengthStr.replace(/\D/g, '');

    // Convert password length string into decimal integer
    const passLength = parseInt(validPassLength, 10);

    /**
     * Validate the password length. Clear the result field and show
     * an error message if the length is out of bounds.
     */
    if (passLength < 6 || passLength > 30) {
        resultField.value = 'Password length must be between 6 and 30 characters';
        return;
    }

    // In the loop, the password field will be populated with random
    // characters based on the length specified by the user.
    for (let i = 0; i < passLength; i++) {
        // Add a random character to the password
        password += randomValue(characters);
    }

    // Display the generated password
    // Set the value of the result field to the generated password
    resultField.value = password;
});