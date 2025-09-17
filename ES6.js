// 1. template string ${}

const fName= "Amir";
const lName = "Hamza";

const messege = `Hello, ${fName} ${lName}! Good Evening.`
// console.log(messege);


// 2. spread (...) 

const cities = ["Dhaka", "Chattagram", "Barisal", "Khulna", "Rajshahi" ]
const newCities = [...cities, "Mymensing", "Rangpur"]
//console.log(newCities)

// !!!!!!!  Rest operator  !!!!!!!

const add = (...rest) => {
    console.log(rest)
}
// add(2,3,4)

// 2.1 copy an array then add a new element to an array 


// 2.1 use filter to remove an element from an array



// 3. Arrow function

// reguler function 
const sum = function(num1,num2){
    const result = num1 + num2;
    return result;
}
 
// 3.1 no parameter ()

const jhinglu = () => console.log(`i'm jhinglu`)

// jhinglu()


// 3.2 single parameter 

const intro = (name) => console.log(`i'm ${name}`)

// intro("jhunglu")


// 3.3 multiple parameters ()

const mult = (num1,num2) => num1*num2;

// 3.4 multi line 
const sub = (num1,num2) => {
    if(num1>num2){
        const result = num1-num2;
        return result;
    }
    else{
        const result = num2-num1;
        return result;
    }
    
}

