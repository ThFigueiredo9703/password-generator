function validateLength() {
  const lengthInput = document.getElementById("password-length");
  const generateBtn = document.getElementById("generate-password-btn");

  const checkboxes = [
    document.getElementById("include-numbers"),
    document.getElementById("upperCase"),
    document.getElementById("lowerCase"),
    document.getElementById("special-characters"),
  ];

  const length = parseInt(lengthInput.value);
  const MAX_LENGTH = 18;

  if (length > MAX_LENGTH) {
    alert(`Erro: O comprimento máximo é ${MAX_LENGTH} caracteres`);

    // Desabilita checkboxes e botão
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = true;
      checkbox.checked = false;
    });
    generateBtn.disabled = true;
    return false;
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
    generateBtn.disabled = false;

    return true;
  }
}

function generate() {
  // Validar comprimento antes de continuar
  if (!validateLength()) {
    return;
  }

  const length = parseInt(document.getElementById("password-length").value);
  const numbers = document.getElementById("include-numbers").checked;
  const uppercase = document.getElementById("upperCase").checked;
  const lowercase = document.getElementById("lowerCase").checked;
  const symbols = document.getElementById("special-characters").checked;

  const password = generatePassword(
    length,
    numbers,
    uppercase,
    lowercase,
    symbols
  );

  const passwordOutput = document.querySelector("#generated-password");
  passwordOutput.innerHTML = password;

  return password;
}

function generatePassword(length, numbers, uppercase, lowercase, symbols) {
  let characters = "";

  if (numbers) {
    characters += "0123456789";
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (symbols) {
    characters += "!@#$%&*()-_";
  }

  let passwordArr = [];

  while (passwordArr.length < length) {
    const char = characters[Math.floor(Math.random() * characters.length)];

    passwordArr.push(char);
  }

  return passwordArr.join("");
}

function passwordLengthError() {
  const passwordBox = document.querySelector("#generated-password");
  passwordBox.style.border = "2px solid red";
  alert("Password length must be 18 or under.");
}

function copyToClipboard() {
  const passwordText = document.querySelector(
    "#generated-password"
  ).textContent;
  const icon = document.querySelector("i");
  let copiedText = document.querySelector(".copied");

  // Verificar se há senha para copiar
  if (!passwordText || passwordText === "") {
    alert("Nenhuma senha gerada para copiar!");
    return;
  }
  navigator.clipboard.writeText(passwordText);
  icon.classList.replace("fa-copy", "fa-check");
  copiedText.textContent = "Copied!";

  setTimeout(() => {
    icon.classList.replace("fa-check", "fa-copy");
    copiedText.textContent = "Copy to clipboard";
  }, 2000);
}
