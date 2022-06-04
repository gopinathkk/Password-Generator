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

// generatePassword(){}

//Start working code

// Start with setting the password character sets used for creating passwords in four arrays:
//lower case letters
var lowCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//uppercase letters
var upCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//Special characters
var splChars = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "?",
  ";",
  ":",
  ",",
];
//numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Start function to generate password
function generatePassword() {
  //start by checking the user requirements

  //first ask for the required character length of the password.
  //validate the input, if it is within the limits of 5 to 128 characters

  var pwLength = window.prompt(
    "Enter password length - a number between 8-128"
  );
  if (!pwLength) {
    window.alert("bye bye");
    return " ";
  } else if (pwLength < 8 || pwLength > 128) {
    pwLength = window.prompt("you must enter a number 8-128 ");
  }
  if (!pwLength) {
    window.alert("bye bye");
    return " ";
  } else if (pwLength < 8 || pwLength > 128) {
    window.alert("The number is not between 8-128, Try again next time ");
    return " ";
  }
  //once validated and recieved a valid character length
  //check the choices of character inclusions in password:
  //options- uppercase, lowercase, number and special characters.

  //first push all user selected inclusions to an array "inclusions[]"
  var inclusions = [];

  //ask user to confirm if uppercase characters to be included
  var includeUpCase = window.confirm(
    "Do you like to include upper case letters in the Password?"
  );
  //if confirmed include uppercase characters to the array "inclusions[]"
  if (includeUpCase) {
    inclusions.push(upCase);
  }
  //ask user to confirm if lowercase characters to be included
  var includeLowCase = window.confirm("Include lower case letters as well?");
  if (includeLowCase) {
    inclusions.push(lowCase);
  }
  //ask user to confirm if numbers to be included
  var includeNumbers = window.confirm(
    "Numbers will make it stronger, include numbers?"
  );
  if (includeNumbers) {
    inclusions.push(numbers);
  }
  //ask user to confirm if special characters to be included
  var includeSplChars = window.confirm(
    "Include some special characters as well?"
  );
  if (includeSplChars) {
    inclusions.push(splChars);
  }
// if user did not select any character option, alert a message and return
  if ((!includeUpCase && !includeLowCase && !includeNumbers && !includeSplChars)==true){
      window.alert("No characters selected. Password cannot be generated. Try again next time");
      return " ";
  }

  //after the user selections recieved and pushed to the array
  //concat all arrays & values in the array "inclution[]"

  var pwEntries = [].concat.apply([], inclusions);

  //now start a function to make the password using the selected characters

  function pwGenerate() {
    // set a new array to store the ransomly chosen characters
    var pwArray = [];

    //this for loop selects as many characters, defined by the user entry "pwLength"
    //characters will be pushed to the array "pwArray"

    for (i = 0; i < pwLength; i++) {
      var index = Math.floor(Math.random() * pwEntries.length);
      pwArray.push(pwEntries[index]);
    }

    //join values of the array to create a string , which will be the password

    password = pwArray.join("");
    console.log(password);

    //the following section is using for validating the password
    //to check the password is meeting all criterias requested by user

    //if user requested lower case, make sure the password has atleast one lower case letter.
    //if no lower case letter, regenerate the password and check again.

    if (includeLowCase) {
      let valUpCase = isLower(password);
      if (valUpCase == true) {
        console.log("No lower");
        pwGenerate(pwEntries);
      }
    }

    //check for upper case if the user requested it
    if (includeUpCase) {
      let valUpCase = isUpper(password);
      if (valUpCase == true) {
        console.log("No upper");
        pwGenerate(pwEntries);
      }
    }
    //check for numbers if the user requested it
    if (includeNumbers) {
      let valUpCase = /\d/.test(password);
      if (valUpCase == false) {
        console.log("No number");
        pwGenerate(pwEntries);
      }
    }
    //check for special characters if the user requested it
    if (includeSplChars) {
      let valUpCase = isSpecial(password);
      if (valUpCase == true) {
        console.log("No Special");
        pwGenerate(pwEntries);
      }
    }
  }

  //function to check if the password string contains lower case letters
  function isLower() {
    return !/[a-z]/.test(password);
  }
  //function to check if the password string contains upper case letters
  function isUpper() {
    return !/[A-Z]/.test(password);
  }
  //function to check if the password string contains special characters
  function isSpecial() {
    return !/[~!@#$%^&*(){}?;:,]/.test(password);
  }

  //execute the password maker function and return the password
  pwGenerate(pwEntries);
  return password;
}

// }
