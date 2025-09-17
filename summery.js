// !!!!!!! fundamental !!!!!!!!
// 1.1 let vs const

// const fatherName = 'Amir Hamza'; // reassign is not possible
// let son = 'Adnan Hamza';
// son = 'Khamzat';


// 1.2 Basic condition
// 6 basic conditions: > , < , === , !== , <= >=
// multiple conditions: && , ||
// if (fatherName === 'Amir Hamza' || son === 'Adnan Hamza'){

// }
// else if(son === 'Khamzat'){

// }
// else{

// }

// 1.3 Array declare
// index,
// length, push
// const numbers = [1,3,5,6,7];
/** 
 * 
 * 
 * 
    numbers.push(8,9,"helloi") //add element at the end
    numbers.pop("helloi") //remove element from the end
    numbers.unshift(-3,-2,-1,0) //add element at the beginning
    numbers.shift() // remove element from the beginning
    numbers.slice(2,6) // from index 2 before 6 ।। ২ থেকে ৬ এর আগ পর্যন্ত 
    numbers.splice(2,6) // from index 2 to 6 ।। ২ থেকে ৬ পর্যন্ত
 * 
 * 
 * 
*/

// console.log(numbers);

// 1.4 for loop
// let sum = 0;
// for (let i=0; i<numbers.length; i++){
//     sum = sum + numbers[i];   
// }
// console.log("sum:", sum);


// 1.5 function

// function multiply(num1,num2){
//     const result = num1*num2;
//     console.log(result);
// }
// mult(5,2)

// 1.6 Object

// const person = {
//     name: "Kablu",
//     age: 25,
//     marks: numbers
// }
// person.name = "bablu"
// console.log(person.name)




// !!!!!!!!! ES6 !!!!!!!!!!!!

// 1. template string ${}

// const fName= "Amir";
// const lName = "Hamza";

// const messege = `Hello, ${fName} ${lName}! Good Evening.`
// console.log(messege);


// 2. spread (...) 

// const cities = ["Dhaka", "Chattagram", "Barisal", "Khulna", "Rajshahi" ]
// const newCities = [...cities, "Mymensing", "Rangpur"]
// console.log(newCities)

// !!!!!!!  Rest operator  !!!!!!!

// const add = (...rest) => {
//     console.log(rest)
// }
// add(2,3,4)

// 2.1 copy an array then add a new element to an array 


// 2.1 use filter to remove an element from an array



// 3. Arrow function

// reguler function 
// const addition = function(num1,num2){
//     const result = num1 + num2;
//     return result;
// }
 
// 3.1 no parameter ()

// const jhinglu = () => console.log(`i'm jhinglu`)

// jhinglu()


// 3.2 single parameter 

// const intro = (name) => console.log(`i'm ${name}`)

// intro("jhunglu")


// 3.3 multiple parameters ()

// const mult = (num1,num2) => num1*num2;

// 3.4 multi line 
// const sub = (num1,num2) => {
//     if(num1>num2){
//         const result = num1-num2;
//         return result;
//     }
//     else{
//         const result = num2-num1;
//         return result;
//     }
    
// }



// 4 destructuring : object destructuring array destructuring 

// 1. array destructuring


// const naika = ['hena', 'moushumi', 'purnima', 'bipasha']

// const [bapparaj, ferdous, , joshim] = naika;

// console.log(bapparaj, ferdous, joshim);

// ----------------------------------------
// 2. object destructuring

// const nayok = {
//     name: 'riyaj',
//     age: 50,
//     numCinema: 15,
//     actress: 'shabnoor'
// }

// const {name, actress, age} = nayok;

// console.log(name, 'age:' , age ,'actress:', actress)

// 5. object declaration shorthand

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy

// const test = undefined
//  if(test){
//  console.log("It's Truthy")
//  }
//  else{
//  console.log("It's falsy")
//  }


// --------ternary------------

// test ? console.log("It's Truthy") : console.log("It's falsy");

// let test = 50;

// test = true ? 10 : 30;

// ---- 

// const isActive = true;

// const showActive = () => {
//     console.log("Mewo is awake")
// }
// const hideActive = () => {
//     console.log("Mewo is sleeping")
// }

// isActive ? showActive() : hideActive()
// isActive && showActive()
// isActive || hideActive()
// console.log(isActive)


// string conversion


//--------------------

// fetch

// 1. JSON => stringify, parse

// const student = {
//     name: 'Salib Khan',
//     age: 32,
//     movies: ['king khan', 'Dhakar Mastan']
// }

// const listData = JSON.stringify(student); //converts  to JSON from OBJECT
// const myData = JSON.parse(listData); //converts to OBJECT from JSON

// console.log(listData, '\n\nparse:' ,myData)


//2. fetch

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// keys, values

// const k = Object.keys(student);
// const v = Object.values(student);
//console.log(k,v, student);

// add or remove from an array
 
// const products =[
//     {name: "laptop", price: 3200, brand: 'lenovo', color: 'silver'},
//     {name: "phone", price: 1200, brand: 'iphone', color: 'white'},
//     {name: "watch", price: 300, brand: 'casio', color: 'black'},
//     {name: "watch2", price: 350, brand: 'casio', color: 'black'},
//     {name: "sunglass", price: 200, brand: 'pookie', color: 'black'}
// ];

// const newProduct = {
//     name: "android", price: 800, brand: 'One Plus', color: 'orange'
// }

// const updatedProducts = [...products, newProduct];
// console.log(updatedProducts)

// add or remove from an array

// const remainingArray = products.filter(produc => produc.brand!=='casio');
// const remainingProducts = [...remainingArray, newProduct]
// console.log(remainingProducts);


// --------------------------

// shortcut

// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy

// const test = undefined
//  if(test){
//  console.log("It's Truthy")
//  }
//  else{
//  console.log("It's falsy")
//  }


// --------ternary------------

// test ? console.log("It's Truthy") : console.log("It's falsy");

// let test = 50;

// test = true ? 10 : 30;

// ---- 

// const isActive = true;

// const showActive = () => {
//     console.log("Mewo is awake")
// }
// const hideActive = () => {
//     console.log("Mewo is sleeping")
// }

// isActive ? showActive() : hideActive()
// isActive && showActive()
// isActive || hideActive()
// console.log(isActive)


// string conversion


// -----------------

// storage

// let id = document.getElementById('id').value;
// let name = document.getElementById('name').value;

// const handleAddToLocalStorage = () => {
    

//     const data = {id,name}
//     localStorage.setItem(id,JSON.stringify(data));
    
// }

// const storedItem = localStorage.getItem('8871263')
// console.log(JSON.parse(storedItem))

// const handleClear = () => {
//     localStorage.clear();
// }
