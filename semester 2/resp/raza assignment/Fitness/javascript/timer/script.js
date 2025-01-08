// Reference to the HTML elements
const display = document.getElementById("display"); // Timer display element
const timeButtons = $("#timeButtons"); // jQuery reference to the container for time selection buttons
const controlButtons = $("#controlButtons"); // jQuery reference to the container for control buttons
const endSound = document.getElementById("endSound"); // Audio element for the beep sound

// Variables for timer functionality
let timer = null; // Stores the interval ID for the timer
let startTime = 0; // Initial time (in milliseconds)
let elapsedTime = 0; // Remaining time (in milliseconds)
let isRunning = false; // Tracks whether the timer is currently running
let currentBoxIndex = 0; // Tracks the current box to update

/**
 * Starts the timer with the specified duration.
 * @param {number} seconds - The duration for the timer in seconds.
 */

function startTimer(seconds) {
    // Set the start time and initialize the remaining time
    startTime = seconds * 1000; // Convert seconds to milliseconds
    elapsedTime = startTime; // Set the elapsed time to the start time
    updateDisplay(); // Update the timer display immediately

    // Play a sound to indicate the timer has started
    endSound.play();

    // Hide the time selection buttons and show the control buttons
    timeButtons.hide(); // Use jQuery to hide time buttons
    controlButtons.css("display", "flex"); // Show control buttons using flex layout

    // Start the countdown timer if it is not already running
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000); // Call `updateTimer` every second
        isRunning = true; // Mark the timer as running
    }
}

/**
 * Updates the timer every second and checks if it has reached 0.
 */
function updateTimer() {
    elapsedTime -= 1000; // Decrease the remaining time by 1 second
    updateDisplay(); // Update the timer display with the new time

    // Check if the timer has reached 0
    if (elapsedTime <= 0) {
        clearInterval(timer); // Stop the timer
        isRunning = false; // Mark the timer as not running
        elapsedTime = 0; // Ensure the elapsed time is set to 0
        endSound.play(); // Play a sound to indicate the timer has ended
        updateBoxColor(); // Call function to update box color

        controlButtons.hide(); // Use jQuery to hide the control buttons
        timeButtons.css("display", "flex");
    }
}

/**
 * Pauses or resumes the timer.
 */
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer); // Stop the timer if it is running
        isRunning = false; // Mark the timer as not running
        $("#pauseBtn").text("Resume"); // Change the pause button text to "Resume"
    } else {
        timer = setInterval(updateTimer, 1000); // Resume the timer
        isRunning = true; // Mark the timer as running
        $("#pauseBtn").text("Pause"); // Change the button text back to "Pause"
    }
}

/**
 * Resets the timer to its initial state.
 */
function resetTimer() {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Mark the timer as not running
    elapsedTime = 0; // Reset the elapsed time
    updateDisplay(); // Update the timer display to show "00:00"

    // Show the time selection buttons and hide the control buttons
    timeButtons.css("display", "flex"); // Use jQuery to show time buttons
    controlButtons.hide(); // Hide the control buttons
}

/**
 * Adds 30 seconds to the current timer.
 */
function addThirtySeconds() {
    elapsedTime += 30000; // Add 30 seconds (30000 milliseconds) to the remaining time
    updateDisplay(); // Update the timer display with the new time
}

/**
 * Updates the timer display with the remaining time.
 */
function updateDisplay() {
    // Calculate the minutes and seconds from the remaining time
    const minutes = String(Math.floor(elapsedTime / 60000)).padStart(2, "0"); // Calculate minutes and format with leading zero
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, "0"); // Calculate seconds and format with leading zero

    // Update the timer display text
    $(display).text(`${minutes}:${seconds}`); // Use jQuery to set the display text
}

// Updates the color of the next box in the sequence
function updateBoxColor() {
    for (let i = 1; i <= 5; i++) {
        const box = document.getElementById(i);
        const currentColor = window.getComputedStyle(box).backgroundColor;

        if (currentColor === "rgb(255, 255, 255)") { // Check if white
            box.style.backgroundColor = "rgb(49, 182, 181)"; 
            break; // Stop after changing one box
        } else if (currentColor === "rgb(49, 182, 181)") { // If blue, move to the next box
            continue;
        }
    }
}

// Function to toggle the color of a specific box
function toggleBoxColor(boxId) {
    const box = document.getElementById(boxId); // Get the box by its ID
    const currentColor = window.getComputedStyle(box).backgroundColor;

    if (currentColor === "rgb(255, 255, 255)") { // If white
        box.style.backgroundColor = "rgb(49, 182, 181)"; // Change to blue
    } else if (currentColor === "rgb(49, 182, 181)") { // If blue
        box.style.backgroundColor = "rgb(255, 255, 255)"; // Change back to white
    }
}


// Add event listeners to each box manually
document.getElementById("1").addEventListener("click", () => toggleBoxColor("1"));
document.getElementById("2").addEventListener("click", () => toggleBoxColor("2"));
document.getElementById("3").addEventListener("click", () => toggleBoxColor("3"));
document.getElementById("4").addEventListener("click", () => toggleBoxColor("4"));
document.getElementById("5").addEventListener("click", () => toggleBoxColor("5"));

