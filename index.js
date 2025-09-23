const specialChars = "@!,.#%$".split("");
const numbers = "1234567890".split("");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
const passwordLengthInput = document.querySelector(".password-length").value;
const includeSpecialChars = document.querySelector("#special-characters").value;
const includeNumbers = document.querySelector("#include-numbers").value;

let password = "";

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Joga os caracteres dentro do array password
for (let i = 0; i < getRandomNumber(letters.length); i++) {
  password += letters[getRandomNumber(letters.length)];
}
