const password = "liebdichmehr123";  // Password you specified
const correctAnswer = "B";  // The correct answer for the riddle (room B)

function checkPassword() {
    const userPassword = document.getElementById("password").value;
    if (userPassword === password) {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("riddleAnswer").value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert("Correct! Room B is her bedroom.");
    } else {
        alert("Incorrect. Try again!");
    }
}
