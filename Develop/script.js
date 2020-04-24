// Assignment Code
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['!', '@', "#", '$', '%', '^', '&', '*', '(', ')'];

function validatePasswordLength(getLength) {

  return (getLength >= 8 && getLength <= 128);
}

function generatePassword(passwordOptions) {
  var passwordFinal = '';
  var passwordCharacters = [];

  if (passwordOptions.lowerCase) {

    passwordCharacters = passwordCharacters.concat(lower);

  }
  //console.log(passwordCharacters);
  if (passwordOptions.upperCase) {

    passwordCharacters = passwordCharacters.concat(upper);

  }
  //console.log(passwordCharacters);
  if (passwordOptions.specialCharacters) {

    passwordCharacters = passwordCharacters.concat(special);


  }
  //console.log(passwordCharacters);
  if (passwordOptions.numericValues) {

    passwordCharacters = passwordCharacters.concat(numeric);
  }
  //console.log(passwordCharacters);



  for (var i = 0; i < passwordOptions.getLength; i++) {

    passwordFinal += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return passwordFinal;
  //console.log(passwordFinal);

}

function writePassword() {
  var getLength = 0;
  while (!validatePasswordLength(getLength)) {

    getLength = parseInt(prompt("Enter a valid number between 8 and 128"));
  }
  

  var passwordOptions = {
    "getLength": getLength,
    "lowerCase": confirm("Would you want lowercase in your password?"),
    "upperCase": confirm("Would you want Uppercase in your password?"),
    "specialCharacters": confirm("Would you want Specialcharacters password?"),
    "numericValues": confirm("Would you want numeric value in your password?"),

  };
  var password = generatePassword(passwordOptions);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//---------------------------------------------------------------------------------//

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
