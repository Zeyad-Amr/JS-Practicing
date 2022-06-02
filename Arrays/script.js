
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



/* for (let i = 0; i < numbers.length; i++){
    const element = numbers[i]*2;
    console.log(element)
}

*/


/* 
const newNumbers=[];
numbers.forEach((e, i) => newNumbers[i]=e*2)
console.log(newNumbers) 
*/


/* 
const newMapedNumbers=numbers.map((e, i) => e*2)
console.log(newMapedNumbers)
*/


//Notes:
// map is used to create a new array from an existing array,
// while forEach is used to iterate over an array and perform an action on each element.

/* 
const user={name:'Zeyad', age:40, address:'Cairo'} 
Object.values(user).forEach((e, i) => console.log(e)) 
Object.keys(user).forEach((e, i) => {
    return console.log(e, user[e]);
}) 
//forEach with object
 */


// ------------------------------ Filters ------------------------------//
/* 
const newNumbers=numbers.filter((e, i) => e%2==0)
console.log(newNumbers)
 */
/* 
const unSortedNumbers = [6,5,1,9,7,3,8,4,2,10];
const unsortedChars = ['c', 'g', 'a','h', 'b','i', 'd','j', 'f', 'e'];


const sortedChars=unsortedChars.sort()
console.log(sortedChars)

const sortedNumber=unSortedNumbers.sort((a, b) => a-b).slice(0,5).filter((e, i) => e%2==0)
console.log(sortedNumber)
 */

/* 
const names=[
    {name:'Zeyad', age:40, address:'Cairo'},
    {name:'Amr', age:30, address:'Alex'},
    {name:'Ahmed', age:20, address:'Cairo'},
    {name:'Ali', age:10, address:'Alex'},
    {name:'Omar', age:50, address:'Alex'},
    {name:'Mohamed', age:60, address:'Cairo'},
    {name:'Hassan', age:70, address:'Alex'},
    {name:'Mahmoud', age:80, address:'Alex'},
    {name:'Youssef', age:90, address:'Alex'},
];

const compare = (a, b) => {
    return a.age-b.age
}

const newNames=names
.sort(compare)
.filter((e, i) => e.age>=40)
.slice(0,3)
.map((e, i) => e.address==='Cairo'?{...e, address:'Alex'}:e);

console.log(newNames)
 */

// ------------------------------ Build E-Commerce Shopping Cart ------------------------------//
/* 
const ShoppingCart = [
    {id:1, quantity:2},
    {id:2, quantity:1},
]

const selectedItem={id:1, quantity:5}
const cardHandler = (cart, item) => {
    const checking=cart.find(e => e.id===item.id);
    if (checking ) {
     return   cart.map(e=>e.id===item.id?{...e, quantity:e.quantity+item.quantity}:e)     
    } else{
        cart.push(item)
        return cart
    }    
}

const cartStatus =cardHandler(ShoppingCart, selectedItem)
console.log(cartStatus) */


// ------------------------------------------------------------//

/* 
const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(mynumbers.includes(10)) // returns true if found or false if not found

console.log(mynumbers.slice(0,5)) // returns a new array with the first 5 elements

console.log(mynumbers.filter((e, i) => e%2==0)) // filter the array to get all the even numbers

console.log(mynumbers.find((e, i) => e%2==0)) // find the first even number

console.log(mynumbers.findIndex((e, i) => e%2==0)) // find the index of the first even number

console.log(mynumbers)
mynumbers.splice(7,5) // remove 5 elements starting from index 7
console.log(mynumbers)
 */