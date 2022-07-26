// Assignment Code
var generateBtn = document.querySelector("#generate");

//Gather password requirements
function generatePassword() {
//Setting intial arrarys to allow selection
let lowlet="abcdefghijklmnopqrstuvwxyz".split("");

let upperlet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
let numeros="987456123".split("");

let sign="!@#$%^&*()".split("");

let Soup = [];

  //Length
  let pwlength = window.prompt("Choose password length 8 - 128", );
  let flower=pwlength
  if (pwlength < 8 || pwlength > 128) 
  pwlenghth =window.prompt ("CHOOSE A NUBMER 8 to 128. NO LOWER. NO HIGHER");

else pwlength= window.alert("Thank you!");

//Lower - GOOD
let askpwLower = window.confirm("lowercase letters okay?", );
  if (askpwLower==true) 
  var newSoup=Soup.concat(lowlet)
  else 
  var newSoup=Soup.concat("*")

//Upper
let askpwUpper = window.confirm("UPPERCASE letters okay?",);
  if (askpwUpper==true)
  var newSoup1=newSoup.concat(upperlet)
  else 
  var newSoup1=newSoup.concat("&")
    

//Numbers
let askpwnumbers =window.confirm ("Numbers okay?", );
  if (askpwnumbers==true) 
  var newSoup2=newSoup1.concat(numeros)
  else
  var newSoup2=newSoup1.concat("!")
  var shuffled=[newSoup3].sort(() => 0.5 - Math.randome());


let askpwsymbols = window.confirm ("Symbols too?", );
  if (askpwsymbols==true) 
  var newSoup3=newSoup2.concat(sign)  
  else
  var newSoup3=newSoup2.concat("*") 

//Setting up to loop and report out password and return
var Reggie =[];

 for (let i = 0; i < flower; i++) {
  Reggie.push(newSoup3[newSoup3.length * Math.random() | 0]);}
  
  let pass=(Reggie.join(''));
  return pass;
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


