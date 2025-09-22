const specialChars = "@!,.#%$".split("");
const numbers = "1234567890".split("");
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const upperLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const passwordLengthInput = document.querySelector(".password-length").value;
const includeSpecialChars = document.querySelector("#special-characters").value;
const includeNumbers = document.querySelector("#include-numbers").value;

let password = [];

function getRandomIndex(index) {
  return Math.floor(Math.random() * index);
}

for (let i = 0; i < letters.length; i++) {
  password.push(letters[getRandomIndex(letters.length)]);
}
