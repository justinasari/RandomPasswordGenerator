
// Variables
var generateBtn = document.querySelector("#generate");
var lowerCase = getRandomLower();
var upperCase = getRandomUpper();
var number = getRandomNumber();
var symbol = getRandomSymbol();
var createdPassword = "";

// Prompt Functions
function generatePassword() {
  var result = "";
  // Determines length
  var length = prompt("How long would you like your password to be? (8-128 Chracters)");
    if (length<8){
      alert("Password must be equal to or greater than 8 characters.")
      return generatePassword();
    }
    else if (length>128){
      alert("Password must be equal to or less than 128 characters.")
      return generatePassword();
    }
    else {
      alert("Password length confirmed.")
    }
  // Determines character types
  var lowerCase = confirm("Include lower case letters?");
  var upperCase = confirm("Include upper case letters?");
  var number = confirm("Include numbers?");
  var symbol = confirm("Include symbols?");
    // Proofs selection and targets generator functions if selected
    if (!lowerCase && !upperCase && !number && !symbol) {
      alert("Choose at least one character type.");
      return generatePassword();
    }
    if (lowerCase) {
      createdPassword += getRandomLower
    }
    if (upperCase) {
      createdPassword += getRandomUpper
    }
    if (number) {
      createdPassword += getRandomNumber
    }
    if (symbol) {
      createdPassword += getRandomSymbol
    }
    for (var i = 0; i < length; i++) {
      result += createdPassword.charAt(Math.floor(Math.random() * createdPassword.length));
    }
    return result;
  }

// Character type generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()+-=~`_[]{}|,./<>?'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
