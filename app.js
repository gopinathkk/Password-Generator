document.getElementById("generate").onclick = function () {
  generatePassword();
};
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function isLower() {
  return !/[a-z]/.test(password);
}
function isUpper() {
  return !/[A-Z]/.test(password);
}
function isSpecial() {
  return !/[~!@#$%^&*(){}?;:,]/.test(password);
}

function generatePassword() {
  var pwLength = window.prompt(
    "Enter password length - a number between 8-128"
  );
  if (!pwLength) {
    window.alert("bye bye");
  } else if (pwLength < 8 || pwLength > 128) {
    pwLength = window.prompt("you must enter a number 8-128 ");
  }
  if (!pwLength) {
    window.alert("bye bye");
  } else if (pwLength < 8 || pwLength > 128) {
    window.alert("The number is not between 8-128, Try again next time ");
    return;
  }

  var inclusions = [];
  var includeUpCase = window.confirm(
    "Do you like to include upper case letters in the Password?"
  );
  if (includeUpCase) {
    inclusions.push(upCase);
  }
  var includeLowCase = window.confirm("Include lower case letters as well?");
  if (includeLowCase) {
    inclusions.push(lowCase);
  }
  var includeNumbers = window.confirm(
    "Numbers will make it stronger, include numbers?"
  );
  if (includeNumbers) {
    inclusions.push(numbers);
  }
  var includeSplChars = window.confirm(
    "Include some special characters as well?"
  );
  if (includeSplChars) {
    inclusions.push(splChars);
  }

  var pwEntries = [].concat.apply([], inclusions);

  
  function pwGenerate() {
    var pwArray = [];

    for (i = 0; i < pwLength; i++) {
      var index = Math.floor(Math.random() * pwEntries.length);
      pwArray.push(pwEntries[index]);
    }

    password = pwArray.join("");
    console.log(password);

    console.log(includeUpCase);
    console.log(includeLowCase);
    console.log(includeNumbers);
    console.log(includeSplChars);

    if (includeLowCase) {
      let valUpCase = isLower(password);
      if (valUpCase == true) {
        console.log("No lower");
        pwGenerate(pwEntries);
      }
    }
    if (includeUpCase) {
      let valUpCase = isUpper(password);
      if (valUpCase == true) {
        console.log("No upper");
        pwGenerate(pwEntries);
      }
    }

    if (includeNumbers) {
      let valUpCase = /\d/.test(password);
      if (valUpCase == false) {
        console.log("No number");
        pwGenerate(pwEntries);
      }
    }

    if (includeSplChars) {
      let valUpCase = isSpecial(password);
      if (valUpCase == true) {
        console.log("No Special");
        pwGenerate(pwEntries);
      }
    }
  }
  pwGenerate(pwEntries);
  return password;
}
