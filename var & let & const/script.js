/// Block Scope problem with var
var month='feb'
if(month=='feb'){
 var month='jan'
}
console.log(month)

var index='zoz'
for (var index = 0; index < 10; index++) {
    const element = 0;
    
}
console.log(index)


/// Function Scope supported by var


function foo(){
    var a=5;
    console.log(a)
}
foo()
// console.log(a) // Having no access to a outside of the functiong


var name='Zeyad'
var name='Zoz'
console.log(name) // Redeclaration problem

console.log(age) // Hoisting problem
var age=22
console.log(age)



 /// So Var Is Not Usable because of it's problems

 /// let vs const
// const not allow changing the value
//support for block scope
// support for function scope
//reject global scope
//reject redeclaration

let mon='feb'
if(mon=='feb'){
    
   let mon='jan'
   mon='kk'
   
}
console.log(mon)


function foo(){
    let a=5;
    console.log(a)
}
foo()
// console.log (a)