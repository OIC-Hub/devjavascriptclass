let qoute1="A long time ago in a country..."

// document.getElementById('title').innerHTML="If you do not have a goal " +
//  "you are not better than a goat"
// document.getElementById('title').innerHTML=`If you do not have a goal 
// you are not better than a goat`
document.getElementById('title').innerHTML= `Say something: ${qoute1} ${qoute1}`

/*
 String Properties and Methods

 */

//Length
let greeting = "How are you doing?";
// var wordlen=greeting.length
// console.log(wordlen)

// Slice(), StrString() StrStr()
// slice(startingindex, endingIndex)

//    console.log(greeting.slice(12, 18));
//    console.log(greeting.slice(12, greeting.length));
// console.log(greeting.slice(-6));
//   console.log(greeting.substring(0, 15)) 
console.log(greeting.substr(3, 4))