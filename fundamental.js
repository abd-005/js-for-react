// 1.1 let vs const

const fatherName = 'Amir Hamza'; // reassign is not possible
let son = 'Adnan Hamza';
son = 'Khamzat';


// 1.2 Basic condition
// 6 basic conditions: > , < , === , !== , <= >=
// multiple conditions: && , ||
if (fatherName === 'Amir Hamza' || son === 'Adnan Hamza'){

}
else if(son === 'Khamzat'){

}
else{

}

// 1.3 Array declare
// index,
// length, push
const numbers = [1,3,5,6,7];
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
let summ = 0;
for (let i=0; i<numbers.length; i++){
    summ = summ + numbers[i];   
}
// console.log("sum:", sum);


// 1.5 function

function multi(num1,num2){
    const result = num1*num2;
    console.log(result);
}
// mult(5,2)

// 1.6 Object

const person = {
    name: "Kablu",
    age: 25,
    marks: numbers
}
person.name = "bablu"
console.log(person.name)
