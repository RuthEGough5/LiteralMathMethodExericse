//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
//1b
console.log(warmHugs.toUpperCase());
//1c
console.log(warmHugs.replace("like", "love"));
//2a
let beenImpaled = "Oh, Look at that. I've been impaled."
//2b
console.log(beenImpaled.slice (18));
//3a
let dotDotDot = `...`
//3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`
console.log(skullBones);
//4
Math.PI
console.log(Math.PI);
//5
let randomNumber = Math.random();
randomNumber*3;
console.log(randomNumber);
//6 - BONUS ATTEMPT...
console.log(" Let It Go!".toUpperCase().repeat(2));
//7 - BONUS ATTEMPT...
let reindeers = "Reindeers are better than people.";
 reindeers = replace (/ /g,"_");
 //// 7b
//console.log(reindeers.replace(/ /g, "_"));
//console.log(reindeers.split(" ").join("_"));
//console.log(reindeers.replaceAll(" ", "_"));
// 8
console.log(Math.SQRT2);
//console.log(Math.sqrt(2)); sqrt is a value vs method


// 9 EXTRA BONUS: ORDER OF operations parens 1st (23-7+1)=17, 2nd Math.Random * 17 (# 0-16.99) +7, 3rd Then from 7 up to 23.99, 4th Product of this floor'd..7-to 23
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
/*
// 9
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// var newRandomNumber = Math.floor(A number from 7 up to 23.999);
// var newRandomNumber = A whole number from 7 up to 23;
*/
console.log(newRandomNumber);

//let randomNumber = Math.ceil(Math.random() * 17) + 6; : runs the risk of getting 6 or 0 though.