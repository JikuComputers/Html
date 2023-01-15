const game = document.getElementById("game");
const scorDisplay = document.getElementById("scor")
const problemDisplay = document.getElementById("problema")
const playerInput = document.getElementById("rezultat")

let scor = 0;
let a, b;
let dificultate = 10;

// Functie care porneste un joc nou
function newGame(level) {
    scor =0;
    dificultate = level; 

    newProblem(dificultate)

    scorDisplay.textContent = scor;
    problemDisplay.textContent = newProblem(dificultate);
}

function newProblem(dificultate) {
    a = Math.floor(Math.random() * dificultate);
    b = Math.floor(Math.random() * dificultate);

    problemDisplay.style.color ="black";

    return a + " + " + b;
}

function verificare() {
    if (playerInput.value == a + b) {
        scor++;

        scorDisplay.textContent = scor
        problemDisplay.textContent =newProblem(dificultate)
        playerInput.value = "";
    }else {
    problemDisplay.style.color = "red";
    }
}

playerInput.addEventListener("input", verificare)
newGame(dificultate)