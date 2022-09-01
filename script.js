// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // this was done with the help of the great ta paul
  var allCharacters = '';
  var completedPassword = '';

  var yesCap = confirm(`Do you want to include uppercase characters in your password?`)
  var noCap = confirm(`Do you want to include lowercase characters in your password?`)
  var specials = confirm('Do you want to include special characters in your password?')
  var numerics = confirm('Do you want to include numbers in your password?')

  console.log(yesCap);
  console.log(noCap);
  console.log(specials);
  console.log(numerics);

  var passwordLength = prompt(`How long do you want your password? Must be 8-128 characters`);
  if ((parseInt(passwordLength) >= 8) && (parseInt(passwordLength) <= 128)) {

    console.log(passwordLength);
    console.log(allCharacters);

    if (yesCap) {
      allCharacters = allCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    //  else {
    //   allCharacters = '';
    // }
    console.log(allCharacters);

    if (noCap) {
      allCharacters = allCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    }
    //  else {
    //   allCharacters = "";
    // }
    console.log(allCharacters);

    if (specials) {
      allCharacters = allCharacters + '!@#$%^&*()-_=+*`~[]{};:,.<>/?'
    }
    //  else {
    //   allCharacters = false;
    // }
    console.log(allCharacters);
    
    if (numerics) {
      allCharacters = allCharacters + '1234567890'
    }
    //  else {
    //   allCharacters = false;
    // }
    console.log(allCharacters)
// if nothing is chosen the allCharacters variable is undefined
    if (allCharacters == "") {
      alert('You have to choose at least 1 character type')
      return generatePassword();
    }

    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random()*allCharacters.length);
      console.log(randomIndex);
      var randomCharacter = allCharacters[randomIndex];
      console.log(randomCharacter);
      completedPassword = completedPassword + randomCharacter;
      console.log(completedPassword);
    } 
    return completedPassword;
  } else {
    alert(`the length needs to be a number between 8 and 128`);
    generatePassword();
  }

}