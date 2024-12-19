// script.js
document.getElementById("roll-button").addEventListener("click", () => {
    const player1Dice = Math.floor(Math.random() * 6) + 1;
    const player2Dice = Math.floor(Math.random() * 6) + 1;
  
    document.getElementById("player1-dice").textContent = getDiceEmoji(player1Dice);
    document.getElementById("player2-dice").textContent = getDiceEmoji(player2Dice);
  
    const resultElement = document.getElementById("result");
    if (player1Dice > player2Dice) {
      resultElement.textContent = "Player 1 Wins!";
    } else if (player1Dice < player2Dice) {
      resultElement.textContent = "Player 2 Wins!";
    } else {
      resultElement.textContent = "It's a Tie!";
    }
  
    console.log(`Player 1: ${player1Dice}, Player 2: ${player2Dice}`);
  });
  
  function getDiceEmoji(value) {
    const diceEmojis = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceEmojis[value];
  }
  