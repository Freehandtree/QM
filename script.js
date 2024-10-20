const password1 = "liebdichmehr123";  // First password for the riddle page
const password2 = "Xl50L";  // Second password for a different page
const correctAnswer = "b";  // The correct answer for the riddle (room B)

function checkPassword() {
    const userPassword = document.getElementById("password").value;

    if (userPassword === password1) {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
    } else if (userPassword === password2) {
        window.location.href = "PSW2.html";  // Redirect to a different page
    } else {
        alert("Incorrect password!");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("riddleAnswer").value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert("Correct! Redirecting...");
        window.location.href = "CP1.html";  // Redirect to reveal page
    } else {
        alert("Incorrect. Try again!");
    }
}
