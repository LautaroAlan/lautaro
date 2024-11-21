let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Por favor, introduce un número válido entre 1 y 100.";
        message.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intento(s).`;
        message.style.color = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "El número es más alto.";
        message.style.color = "blue";
    } else {
        message.textContent = "El número es más bajo.";
        message.style.color = "blue";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
}
