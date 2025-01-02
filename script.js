const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    // İlk olaraq yükləmə mesajını göstəririk
    playerDisplay.textContent = "PLAYER: Loading...";
    computerDisplay.textContent = "COMPUTER: Loading...";
    resultDisplay.textContent = "Waiting...";

    setTimeout( () => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = "";

        if (playerChoice === computerChoice) {
            result = "DRAW!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "YOU WIN!";
            playerScore++;
        } else {
            result = "YOU LOSE!";
            computerScore++;
        }

        // Nəticələri yeniləyirik
        computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
        playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
        resultDisplay.textContent = result;

        // Əvvəlki nəticə üslublarını silirik
        resultDisplay.classList.remove("greenText", "redText");

        // Skor və üslubu yeniləyirik
        if (result === "YOU WIN!") {
            resultDisplay.classList.add("greenText");
            playerScoreDisplay.textContent = playerScore;
        } else if (result === "YOU LOSE!") {
            resultDisplay.classList.add("redText");
            computerScoreDisplay.textContent = computerScore;
        }
    }, 1500); // 1,5 saniyə gözləmə müddəti
}
