// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// const listData = JSON.stringify(student); //converts  to JSON from OBJECT
// const myData = JSON.parse(listData); //converts to OBJECT from JSON

// console.log(listData, '\n\nparse:' ,myData)


//2. fetch

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// keys, values

const k = Object.keys(student);
const v = Object.values(student);
//console.log(k,v, student);

// add or remove from an array
 
const products =[
    {name: "laptop", price: 3200, brand: 'lenovo', color: 'silver'},
    {name: "phone", price: 1200, brand: 'iphone', color: 'white'},
    {name: "watch", price: 300, brand: 'casio', color: 'black'},
    {name: "watch2", price: 350, brand: 'casio', color: 'black'},
    {name: "sunglass", price: 200, brand: 'pookie', color: 'black'}
];

const newProduct = {
    name: "android", price: 800, brand: 'One Plus', color: 'orange'
}

const updatedProducts = [...products, newProduct];
// console.log(updatedProducts)

// add or remove from an array

const remainingArray = products.filter(produc => produc.brand!=='casio');
const remainingProducts = [...remainingArray, newProduct]
console.log(remainingProducts);


