var generateBtn = document.querySelector("#generate");

charactersArrayForPassword =[]; 
  uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  specialcharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "/", "'"]

generateBtn.addEventListener("click", writePassword);

var includeUppercase;
var includeLowercase;
var includeSpecialcharacter;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}

//Main function
function generatePassword() {

  promptsForUser();
  buildPassword();

    }

function promptsForUser() {
  var passwordLength = prompt("Choose password length between 8 - 128 characters");
  passwordLength = parseInt(passwordLength, 10);
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    prompt("Enter a valid # and between 8-128 characters");
  }
  var includeUppercase = confirm("Do you want to include uppercase?");
  var includeLowercase = confirm("Do you want to include uppercase?");
  var includeSpecialcharacter = confirm("Do you want to include special character?");

  if (includeUppercase === false && includeLowercase === false && includeSpecialcharacter === false) {
    alert("Choose at least one option of uppercase, lowercase or special character");
  }
}

function buildPassword(){
    if(includeUppercase === true){
      charactersArrayForPassword.push(uppercaseArray);
    } 
    if(includeLowercase === true){
      charactersArrayForPassword.push(lowercaseArray);
    }
    if (includeSpecialcharacter === true) {
      charactersArrayForPassword.push(specialcharacterArray);
    }

  password = "";

  for (var i =0; i< passwordLength; i++){
    password = password + charactersArrayForPassword[Math.floor(Math.random() * charactersArrayForPassword.length)] 
    
  }


}



// Remove this logic? This section? 
// if (includeUppercase === true) {
//   for (var i = 0; i < passwordLength; i++) {
//     passwordResult = passwordResult + lowercaseArray[parseInt[(Math.random() * lowercaseArray.length)]]
// } 
// }

// ```GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// ```
// ```WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// ```

// ```WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// ```
//ask user for password length, >8
//prompt("Enter pwd length betwen 8-128)
//check input if between 8-128
//take input, assign to a variable passwordLength


```WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
```


```WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
```

```WHEN all prompts are answered
THEN a password is generated that matches the selected criteria




```

```WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

// alert(generatedPassword); or something like that