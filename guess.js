let randomNumber;

document.getElementById("range").addEventListener("change", () => {
  const range = parseInt(document.getElementById("range").value);
  randomNumber = Math.floor(Math.random() * range) + 1;
  document.getElementById(
    "output"
  ).textContent = `A new number has been generated! Guess between 1 and ${range}.`;
});

function playGame() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const range = parseInt(document.getElementById("range").value);

  if (!userGuess || userGuess < 1 || userGuess > range) {
    document.getElementById(
      "output"
    ).textContent = `Please enter a number between 1 and ${range}.`;
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("output").textContent =
      "🎉 Congratulations! You guessed the correct number!";
  } else if (userGuess < randomNumber) {
    document.getElementById("output").textContent = "Too low! Try again.";
  } else {
    document.getElementById("output").textContent = "Too high! Try again.";
  }
}

// Initialize the game with the default range
document.getElementById("range").dispatchEvent(new Event("change"));
