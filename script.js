// ============================================
// ACTIVITY 3: THE SOLAR SYSTEM QUIZ
// ============================================
// In this activity, you will create a quiz where users guess the 8 planets.
// Follow the TODO comments to complete each section.
// Hint: Remember "My Very Eager Mother Just Served Us Nachos"
// (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
// We use document.querySelector() to "grab" HTML elements so we can 
// interact with them in JavaScript.
// 
// querySelector() takes a CSS selector as an argument:
//   - "#id-name" selects an element by its ID
//   - ".class-name" selects an element by its class
//
// TODO: Select the following three elements from the HTML:
//   1. The text input box (id="user-input")
//   2. The output div where correct answers appear (id="quiz-outputs")
//   3. The status message area (id="status")
// --------------------------------------------

const textBox = 
const outputBox = 
const statusBox = 

// This console.log helps us verify our selections worked correctly.
// Open the browser's Developer Tools (F12) to see the output.
console.log(textBox, outputBox, statusBox);

// --------------------------------------------
// STEP 2: CREATE VARIABLES TO TRACK GAME STATE
// --------------------------------------------
// We need variables to keep track of:
//   - The player's score (how many correct answers)
//   - Whether they found the secret bonus answer
//
// TODO: Create two variables:
//   1. A "score" variable initialized to 0
//   2. A "bonus" variable (boolean) initialized to false
// --------------------------------------------

let score = 0;
let pluto = false;

// --------------------------------------------
// STEP 3: CREATE THE ANSWER-CHECKING FUNCTION
// --------------------------------------------
// This function runs every time the user submits an answer.
// It checks the user's input against our list of correct answers.
//
// Key concepts used here:
//   - textBox.value: Gets the text the user typed
//   - innerHTML: Allows us to add HTML content to an element
//   - += operator: Adds to existing content (doesn't replace it)
//   - if/else if/else: Checks multiple conditions in order
// --------------------------------------------

const checkAnswer = () => {
  // Get the current value from the text input
  

  // TODO: Create if/else if/else statements to check for each planet.
  // For each correct answer:
  //   1. Add an <h3> with the planet name and a <p> with a fun fact
  //   2. Increase the score by 1
  // For incorrect answers:
  //   - Display an error message in the statusBox

  if (currentAnswer === "Mercury") {

  } else if (currentAnswer === "Venus") {

  } else if (currentAnswer === "Earth") {

  } else if (currentAnswer === "Mars") {

  } else if (currentAnswer === "Jupiter") {

  } else if (currentAnswer === "Saturn") {

  } else if (currentAnswer === "Uranus") {

  } else if (currentAnswer === "Neptune") {

  } else if (currentAnswer === "Pluto") {
    // Secret bonus answer - Pluto was reclassified as a dwarf planet in 2006
  
  } else {
    // If no conditions match, show an error message
  
  }

  // After checking the answer, verify if the game is complete
  checkScore();

  // Reset the text box for the next answer
  textBox.value = "";
};

// --------------------------------------------
// STEP 4: CREATE THE SCORE-CHECKING FUNCTION
// --------------------------------------------
// This function checks if the player has won the game.
// It updates the status message based on their progress.
//
// TODO: Check two conditions:
//   1. If score equals 8, display a congratulations message
//   2. If score equals 8 AND they found the bonus, display a special message
//      and disable the input box (textBox.disabled = true)
// --------------------------------------------

const checkScore = () => {
  if (score === 8) {
   
  }
  if (score === 8 && pluto) {
    
    // Disable the text box since the game is complete
    
  }
};

// --------------------------------------------
// STEP 5: ADD AN EVENT LISTENER
// --------------------------------------------
// Event listeners "listen" for specific events (like clicks, key presses, etc.)
// and run a function when that event occurs.
//
// addEventListener() takes two arguments:
//   1. The event type (as a string): "change", "click", "keydown", etc.
//   2. The function to run when the event happens
//
// The "change" event fires when the user changes the input and leaves the field
// (usually by pressing Enter or clicking elsewhere)
//
// TODO: Add an event listener to textBox that:
//   - Listens for the "change" event
//   - Calls the checkAnswer function when triggered
// --------------------------------------------

