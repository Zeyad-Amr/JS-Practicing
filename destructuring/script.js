/* 
const countries = [
    {name: 'USA', capital: 'Washington'},
    {name: 'Canada', capital: 'Ottawa'},
    {name: 'Germany', capital: 'Berlin'},
    {name: 'France', capital: 'Paris'},
    "rest of the countries"
]; 

// const [first,second, third, ...rest] = countries;
// console.log(first);


const [first,{name:name2, capital:capital2}, third, ...rest] = countries; // destructuring the array
console.log(name2);
 */


const userData={ // destructuring the object
    persons:[
        {name: 'Zeyad', age: 40},
        {name: 'Amr', age: 30, more:['male', '170 cm']},
    ], 
    status:'active'
}

const {persons:personsArrayFormate, persons:[,{name,age,more:moreArrayFormate,more:[gender,height]}]}=userData;
console.log(personsArrayFormate)
console.log(moreArrayFormate)

console.log(gender)





/* 
const names=["Zeyad", "Amr", "Fekry", "Ebrahim" ]

// for (let i = 0; i < names.length; i++){
//     const element = names[i];
//     console.log(element)
// }

names.forEach((e, i) => console.log(`${i+1}. ${e}`)) // forEach is a method of array
 */

/* 
const userInfo = {name:'Zeyad', age:40, more:['male', 170]}

function getUserInfo({name, age,more:[gender,height]}){ // Destructuring Paramerters
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(height)

}

getUserInfo(userInfo)
 */
