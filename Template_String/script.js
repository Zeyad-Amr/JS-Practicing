console.log("Hello World");


var name = "Zeyad";
var age = 40;

function ageCheck(){
     if (age>40) {
         return 'too old';
     }else{
         return 'too young'
     }
} 


///  Using '' or "" ///

var output= 'My name is ' + name + ' and I\'m ' + age + " years old, I'm " + ageCheck();
console.log(output);


///  Using `` Template String ///
var output2 = `My name is ${name} and I'm ${age++} years old, I'm ${age>40?'too old':'too young'}`;

console.log(output2);


