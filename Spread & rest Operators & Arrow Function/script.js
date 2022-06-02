
/* 
function myName (name){
    console.log(name);
}


myName('Zeyad');
 */

/* 
const myName=(name)=>name==='Zeyad'?'Hello Zeyad':'Don\'t know you';


let x=myName('Zeyad');
console.log(x);
 */

/* 
const name1=[1,2,3,4,5];
// const name2=Object.assign([],name1);
const name2 =[0,...name1,6]; //  ... spread operator to clone the array
console.log(name2);
 */


/* 
const obj1= {name:'Zeyad', age:40}
// const obj2=Object.assign({},obj1)
const obj2 ={...obj1,last_name:'Amr'} //  ... spread operator to clone the object 
console.log(obj1);
console.log(obj2);
 */

/* 
const numbers = [1,2,3,4,5];
const maxNum=Math.max(...numbers); // spread operator to pass the array as an argument

console.log(maxNum);
 */

/* 
const retrunName=(name1, name2, name3)=>{
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

const names=['Zeyad','Amr','Ali'];
retrunName(...names); // spread operator to pass the array as arguments

 */


// const getUserData=(fname, lname,...params)=>{ // rest operator to pass the array as arguments
//     console.log(fname);
//     console.log(lname);
//     console.log(params);
// }
// getUserData('Zeyad','Amr',40,'cairo', 'Engineer');

