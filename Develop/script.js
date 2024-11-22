var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?".split("");

//password length prompt
var userPassLength = function () {
  var passwordCriteria = Number(
    prompt(
      "How many characters would you like your password to contain. Enter a number between 8 - 128"
    )
  );
  while (
    isNaN(passwordCriteria) ||
    passwordCriteria < 8 ||
    passwordCriteria > 128
  ) {
    alert("Please choose a number between 8 - 128");
    return userPassLength();
  }
  return passwordCriteria;
};

//user password choice
var userPassChoice = function () {
  var criteria = {
    upperCaseConfirm: confirm("Include uppercase in the Password"),
    lowerCaseConfirm: confirm("Include lowercase in the password"),
    specialChrConfirm: confirm("Include Special Characters in the password"),
    numbersChrConfirm: confirm("Include numbers in the password"),
  };
  if (
    !criteria.upperCaseConfirm &&
    !criteria.lowerCaseConfirm &&
    !criteria.specialChrConfirm &&
    !criteria.numbersChrConfirm
  ) {
    alert("Please pick one character type");
    return userPassChoice();
  }
  return criteria;
};

var mainLogic = function (passwordLength, criteria) {
  var combinePool = [];
  var guranteedChars = [];
  var passwordLength = userPassLength();
  var criteria = userPassChoice();

  if (criteria.upperCaseConfirm) combinePool = combinePool.concat(upperCase);

  if (criteria.lowerCaseConfirm) combinePool = combinePool.concat(lowerCase);

  if (criteria.specialChrConfirm)
    combinePool = combinePool.concat(specialCharacters);

  if (criteria.numbers) combinePool = combinePool.concat(numbers);

  if (criteria.upperCaseConfirm)
    guranteedChars.push(
      upperCase[Math.floor(Math.random() * upperCase.length)]
    );

  if (criteria.lowerCaseConfirm)
    guranteedChars.push(
      lowerCase[Math.floor(Math.random() * lowerCase.length)]
    );

  if (criteria.specialChrConfirm)
    guranteedChars.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );

  if (criteria.numbersChrConfirm)
    guranteedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);

  while (guranteedChars.length < passwordLength) {
    guranteedChars.push(
      combinePool[Math.floor(Math.random() * combinePool.length)]
    );
  }
  return guranteedChars.join("");
};

function generatePassword() {
  return mainLogic();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//scrap code
/*
  // Calculate remaining characters needed
  var remainingLength = passwordLength - guranteedChars.length;

  // Add remaining random characters from combined pool
  for (var i = 0; i < remainingLength; i++) {
    var randomIndex = Math.floor(Math.random() * combinedPool.length);
    guranteedChars.push(combinedPool[randomIndex]);
  }

  // Return the final password as a string
  var finalPassword = guranteedChars.join("");
  return finalPassword;
  */
