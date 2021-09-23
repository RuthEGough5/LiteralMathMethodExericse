// The Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
//OPTION 1 console.log(beenImpaled.slice(18, 36)); NEGATIVE NUMBER OPTION 2: console.log(beenImpaled.slice(-18));

// 3a
//let dotDotDot = "..."; 
//OR
let dotDotDot = `...`

// 3b STRING CONCATENATION
let skullBones = `I don't a skull${dotDotDot}or bones.`;

// 4
console.log(Math.PI);

// 5 BEST PRACTICE DO NOT USE CEIL FOR RANDOM
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);
// let randomNum = Math.random();
// randomNum *= 3;
// randomNum = Math.ceil(randomNum);
// console.log(randomNum);

// BONUS
// 6 1ST BEFORE CHANGE, 2ND AFTER CHANGE, 3RD IN CLASS
console.log(" Let It Go!");
console.log(" Let It Go!".toUpperCase().repeat(2));
// console.log(" Let It Go!".toUpperCase().repeat(2).trim());

