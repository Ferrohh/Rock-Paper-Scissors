const enumRPS = [
    {id: "rock", dir: "img/Rock.png"}, 
    {id: "paper", dir: "img/Paper.png"}, 
    {id: "scissors", dir: "img/Scissors.png"}]

const winStates = ["The player won!", "The CPU won!", "Nobody won!"]

const win = [
    {win: true, dir: "img/Win.png"},
    {win: false, dir: "img/Lose.png"}
]

const loadingDir = "img/Loading.png"


const player = document.getElementById("player")
const CPU = document.getElementById("cpu")
const winText = document.getElementById("winner")
const choice = document.getElementById("choice")
const result = document.getElementById("result")
const helpText = document.getElementById("helpText")

let playerChoice, CPUChoice;

function handleKeyPress(event) {
    if(
        (event.code === 'Space') || 
        (event.key === ' ')
    ) {
        startGame();
    }
}

document.addEventListener('keydown', handleKeyPress)

function startGame() {
    CPUChoice = enumRPS[generateNumber(3)];

    player.src = loadingDir
    CPU.src = loadingDir
    result.src = loadingDir

    choice.style.display = "block";

    helpText.textContent = "Choose an option: "
    winText.textContent = "";
}

function generateNumber(max) {
    let num = Math.floor((Math.random()*max));
    return num;
}


function winner() {
    setImages()
    if(
        (playerChoice.id === "scissors" && CPUChoice.id === "scissors") ||
        (playerChoice.id === "rock" && CPUChoice.id === "rock") ||
        (playerChoice.id === "paper" && CPUChoice.id === "paper")
    ) {
        winText.textContent = winStates[2]
        result.src = win[1].dir
    }
    else if(
        (playerChoice.id === "scissors" && CPUChoice.id === "paper") ||
        (playerChoice.id === "rock" && CPUChoice.id === "scissors") ||
        (playerChoice.id === "paper" && CPUChoice.id === "rock")
    ) {
        winText.textContent = winStates[0]
        result.src = win[0].dir

    }
    else {
        winText.textContent = winStates[1]
        result.src = win[1].dir
    }

    choice.style.display = "none"
    helpText.textContent = "Press space to play again"
}


function setImages() {
    player.src = playerChoice.dir
    CPU.src = CPUChoice.dir
}

function rockPaperScissors(num) {
    playerChoice = enumRPS[num]
    console.log(playerChoice)
    winner()
}