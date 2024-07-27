/**
 * Notice: The documentation in this code has been enhanced with the help of 
 * an AI tool to improve clarity and completeness. Only the documentation 
 * was generated with AI. This code was created for study purposes, and using 
 * GPT for detailed documentation aims to facilitate my future reference and 
 * assist anyone else who uses this code for the same purpose.
 */

// Select all buttons within the #plus-home element with the class .plus-point
const btnsHome = document.querySelectorAll('#plus-home .plus-point'); 

// Select the element with the ID home-points to display the home score
const homeBoard = document.getElementById('home-points'); 

// Initialize the home score to zero
let homeScore = 0;

/**
 * Adds click event listeners to each home score button.
 * When a button is clicked, the home score is increased by the value
 * specified in the button's data-increase attribute, and the home score
 * display is updated.
 */
btnsHome.forEach((e) => {
    e.addEventListener('click', () => {
        // Increase the home score by the value specified in data-increase
        homeScore += Number(e.dataset.increase);
        // Update the home score display
        homeBoard.textContent = homeScore;
    });
});

// Select all buttons within the #plus-guest element with the class .plus-point
const btnsGuest = document.querySelectorAll('#plus-guest .plus-point'); 

// Select the element with the ID guest-points to display the guest score
const guestBoard = document.getElementById('guest-points'); 

// Initialize the guest score to zero
let guestScore = 0;

/**
 * Adds click event listeners to each guest score button.
 * When a button is clicked, the guest score is increased by the value
 * specified in the button's data-increase attribute, and the guest score
 * display is updated.
 */
btnsGuest.forEach((e) => {  
    e.addEventListener('click', () => {
        // Increase the guest score by the value specified in data-increase
        guestScore += Number(e.dataset.increase); 
        // Update the guest score display
        guestBoard.textContent = guestScore; 
    });
});