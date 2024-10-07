const password = "mypassword";  // Change this to your fixed password
const answer = "piano";  // Change this to your riddle answer

let characterPosition = { x: 0, y: 0 };  // Character starts at (0, 0)

function checkPassword() {
    const userPassword = document.getElementById("password").value;
    if (userPassword === password) {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
        renderGrid();
    } else {
        alert("Incorrect password!");
    }
}

function renderGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = '';

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement("div");
            if (characterPosition.x === col && characterPosition.y === row) {
                const character = document.createElement("div");
                character.classList.add("character");
                cell.appendChild(character);
            }
            grid.appendChild(cell);
        }
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("riddleAnswer").value.toLowerCase();
    if (userAnswer === answer) {
        moveCharacter();
        renderGrid();
        document.getElementById("riddleAnswer").value = ""; // Clear the answer input
    } else {
        alert("Incorrect answer, try again!");
    }
}

function moveCharacter() {
    // Move character to the right, wrapping to the next row if needed
    characterPosition.x++;
    if (characterPosition.x >= 5) {
        characterPosition.x = 0;
        characterPosition.y++;
    }
    if (characterPosition.y >= 5) {
        characterPosition.y = 0; // Reset if out of bounds
    }
}
