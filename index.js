// Iteration 1: Names and Input
let hacker1 = "Sara";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Manolo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driversNameLength = hacker1.length;
let navigatorsNameLength = hacker2.length;

if (driversNameLength > navigatorsNameLength) {
  console.log(
    `The driver has the longest name, it has ${driversNameLength} characters`
  );
} else if (driversNameLength < navigatorsNameLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorsNameLength} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorsNameLength} characters!`
  );
}

// Iteration 3: Loops
//3.1
let changedName = "";
for (let i = 0; i < hacker1.length; i++) {
  changedName += hacker1[i].toUpperCase() + " ";
}
console.log(changedName);

//3.2 using the let of 3.1
for (let i = hacker2.length - 1; i >= 0; i--) {
  changedName += hacker2[i];
}
console.log(changedName);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


//BONUS 1
//How many words in the text?
let longText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

let spaceCount = 0;
let etCount = 0;

for (let i = 0; i < longText.length; i++){
  let target = longText[i];
  if (target === " "){
    spaceCount += 1;
  }
} 
let wordCount = spaceCount + 1;
console.log(wordCount);


//How many "et"s?


for (let i = 0; i < longText.length; i++){
  let target = longText[i] + longText[i + 1];
  if (target === "et"){
    etCount += 1;
  }
}

//BONUS 2 - Only works without punctuation. To remove the spaces I put them in the trash variable.

let phraseToCheck = "amor r o m a";
let readNormal = "";
let readReversed = "";
let spaceTrash = "";

for (let i = 0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] === " "){
    spaceTrash += phraseToCheck[i]
  } else {
      readNormal += phraseToCheck[i].toLowerCase();

  }
}
for (let i = phraseToCheck.length -1; i >= 0; i--){
  if (phraseToCheck[i] === " "){
    spaceTrash += phraseToCheck[i]
  } else {
  readReversed += phraseToCheck[i].toLowerCase();
}}

if (readNormal === readReversed){
  console.log("YESSSS it's a Palindrome.");
} else {
  console.log("loserrrr, try again");
}


