// primitive data types => immutable , pass by value
// undefined
// Boolean
// Number
// String
// BigInt
// Symbol



let name ='Zeyad'
name[0]='A'
console.log(name) // no effect as it's immutable

let name1='Zeyad'
let name2=name1
name1='Amr'
console.log(name1)
console.log(name2) // no effect as it's immutable


// refernece data types => mutable , pass by object or reference
// array
// object
// function


// mutate is to change the value of the variable not reassign the variable
// const used with mutable data types to prevent reassignment


const array1=[1,2,3,4,5]
const array2=array1
const array3 = Object.assign([],array1) // cloning the array
array3.push(6)
array1[0]=10
console.log(array1)
console.log(array2)
console.log(array3)


Object.freeze(array1) // freeze the array, cloning and changing the array will not effect the original array