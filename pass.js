let useUppercase = false;
let useLowercase = false;
let useDigits = false;
let useSpecial = false;

document.getElementById("Ucase").onclick = () => {
  useUppercase = !useUppercase;
  toggleButtonState("Ucase", useUppercase);
};

document.getElementById("Lcase").onclick = () => {
  useLowercase = !useLowercase;
  toggleButtonState("Lcase", useLowercase);
};

document.getElementById("digit").onclick = () => {
  useDigits = !useDigits;
  toggleButtonState("digit", useDigits);
};

document.getElementById("Schar").onclick = () => {
  useSpecial = !useSpecial;
  toggleButtonState("Schar", useSpecial);
};

function toggleButtonState(buttonId, state) {
  const button = document.getElementById(buttonId);
  if (state) {
    button.style.backgroundColor = "#00ff00";
    button.style.color = "#121212";
  } else {
    button.style.backgroundColor = "#00ffff";
    button.style.color = "#121212";
  }
}

function generatePassword() {
  let smallLetters = "abcdefghijklmnopqrstuvwxyz";
  let bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let characters = "!@#$%^&*~?";

  let length = document.getElementById("length").value;

  let availableChars = "";

  if (useUppercase) availableChars += bigLetters;
  if (useLowercase) availableChars += smallLetters;
  if (useDigits) availableChars += numbers;
  if (useSpecial) availableChars += characters;

  if (availableChars === "") {
    document.getElementById("passwordOutput").textContent =
      "Please select at least one character type";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += availableChars.charAt(
      Math.floor(Math.random() * availableChars.length)
    );
  }

  document.getElementById("passwordOutput").textContent = password;
}
