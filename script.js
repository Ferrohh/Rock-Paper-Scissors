// mapping of the rock/paper/scissors names and directories for images
const enumRPS = [
    {id: "rock", dir: "img/Rock.png"}, 
    {id: "paper", dir: "img/Paper.png"}, 
    {id: "scissors", dir: "img/Scissors.png"}
]

// messages for winning/losing
const winStates = ["The player won!", "The CPU won!", "Nobody won!"]

// mapping of directories for winning/losing images
const win = [
    {win: true, dir: "img/Win.png"},
    {win: false, dir: "img/Lose.png"}
]

// directory for loading image
const loadingDir = "img/Loading.png"

/* HTML ELEMS */
// game board
const gameBoard = document.getElementById("game")
// images of player/CPU
const player = document.getElementById("player")
const CPU = document.getElementById("cpu")
// central texts
const result = document.getElementById("result") // for displaying image
const winText = document.getElementById("winner") // for text of who won
const helpText = document.getElementById("helpText") // for writing to press space
// buttons
const choice = document.getElementById("choice")


// variables for player and CPU choices
let playerChoice, CPUChoice;


// event for pressing space
function handleKeyPress(event) {
    if(
        (event.code === 'Space') || 
        (event.key === ' ')
    ) {
        startGame(); // it calls the startGame function
    }
}
document.addEventListener('keydown', handleKeyPress)


// function when the game starts
function startGame() {
    CPUChoice = enumRPS[generateNumber(3)]; // cpu gets a random choice

    // changes of all the images to loading
    player.src = loadingDir
    CPU.src = loadingDir
    result.src = loadingDir

    // showing the player choice
    choice.style.display = "block";
    game.style.height = "60vh"

    // changing central texts
    helpText.textContent = "Choose an option: "
    winText.textContent = "";
}


// function to generate random numbers between 0 and max (not included)
function generateNumber(max) {
    let num = Math.floor((Math.random()*max));
    return num;
}


// function that sets the winner
function winner() {
    // hided the choices
    choice.style.display = "none"
    game.style.height = "80vh"

    // reset the help text
    helpText.textContent = "Press space to play again"


    setImages() // setted images

    // deciding the winner
    if( // nobody won
        (playerChoice.id === "scissors" && CPUChoice.id === "scissors") ||
        (playerChoice.id === "rock" && CPUChoice.id === "rock") ||
        (playerChoice.id === "paper" && CPUChoice.id === "paper")
    ) {
        winText.textContent = winStates[2]
        result.src = win[1].dir
    }
    else if( // the player won
        (playerChoice.id === "scissors" && CPUChoice.id === "paper") ||
        (playerChoice.id === "rock" && CPUChoice.id === "scissors") ||
        (playerChoice.id === "paper" && CPUChoice.id === "rock")
    ) {
        winText.textContent = winStates[0]
        result.src = win[0].dir

    }
    else { // the CPU won
        winText.textContent = winStates[1]
        result.src = win[1].dir
    }
}


// function for setting player choice when he clicks one of the buttons
function rockPaperScissors(num) {
    playerChoice = enumRPS[num]
    winner()
}


// function to set images to player/CPU with their choices
function setImages() {
    player.src = playerChoice.dir
    CPU.src = CPUChoice.dir
}