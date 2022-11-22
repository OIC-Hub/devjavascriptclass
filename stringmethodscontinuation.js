let poem =
 `John Doe says I go Up
 up up I go
 if I go up I will go down`

//  console.log(poem.indexOf('up', 30));
console.log(poem.indexOf('John Doe'));

var email = "sfdfdfdfdfdfdfdffdfd@gmail.com"

if(email.indexOf('@', 3) != -1 && email.indexOf('.') != -1 && (email.indexOf('gmail') != -1) ){
    console.log('Valid Email');
}else{
    console.log('Your Email is invalid')
}
//lastIndexOf()
// console.log(poem.lastIndexOf('up'))
console.log(poem.search(/up/i))

// replace method
// let newPoem = poem.replace('Up', 'went');
let newPoem = poem.replaceAll('up', 'went');
console.log(newPoem)

// match 

// console.log(poem.match('up')); rturning only single matched string

let matchchar = poem.match(/up/ig) //Using regular expression
console.log(matchchar) ;
var phone = "0800251992"
if( (phone.includes('081') || phone.includes('070') || phone.includes('091') || phone.includes('080')) && phone.length ==11 ){
    console.log('Valid phone number')
}else{
    console.log('Not Valid')
}

//trim()
let world= '                Hello World         ';
world = world.trimEnd()
console.log(world.indexOf('H'))