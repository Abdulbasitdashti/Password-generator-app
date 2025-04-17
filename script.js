const passwordBox = document.getElementById("password");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-=+{}[]\|?/><.,";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


navigator.clipboard.writeText("Text to copy")
  .then(() => {
    console.log("Copied to clipboard!");
  })
  .catch(err => {
    console.error("Failed to copy: ", err);
  });

  function copyText() {
    const input = document.getElementById("Text");
    navigator.clipboard.writeText(input.value)
      .then(() => alert("Copied!"))
      .catch(err => alert("Failed to copy: " + err));
  }