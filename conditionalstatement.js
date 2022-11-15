/*
Conditional Statement
if,else, if else, switch()
syntax 

if(conditon){
    Statement
}
*/
// if statement
if(20 >23 || 0 > 1){
  let score = 100
  let grade = (score > 70) ? "A": "Fail";
  console.log(grade);

}
let firstName = "sunday"

if(firstName =='Sunday'){
    console.log("Welcome to our Hub" +  " " + firstName + "Your first name is in our database")
}
else if(firstName =='Opeyemi'){
    console.log('You presented your middle name as first name')
}else if(firstName =='Omolewu'){
    console.log('You presented your last name as first name')
}else{
    console.log('Invalid details') 
}
