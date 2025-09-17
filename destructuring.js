// 1. array destructuring


const naika = ['hena', 'moushumi', 'purnima', 'bipasha']

const [bapparaj, ferdous, , joshim] = naika;

// console.log(bapparaj, ferdous, joshim);


// 2. object destructuring

const nayok = {
    name: 'riyaj',
    age: 50,
    numCinema: 15,
    actress: 'shabnoor'
}

const {name, actress, age} = nayok;

console.log(name, 'age:' , age ,'actress:', actress)