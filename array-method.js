const products =[
    {name: "laptop", price: 3200, brand: 'lenovo', color: 'silver'},
    {name: "phone", price: 1200, brand: 'iphone', color: 'white'},
    {name: "watch", price: 300, brand: 'casio', color: 'black'},
    {name: "watch2", price: 350, brand: 'casio', color: 'black'},
    {name: "sunglass", price: 200, brand: 'pookie', color: 'black'}
];

// 3.1 map

const brands = products.map(produc=>produc.brand);
// console.log(brands)

// 3.2 forEach

const prices = products.forEach(produc=>console.log('price:', produc.price));
// console.log(prices) // return undefined

// 3.3 filter

const blacks = products.filter(colors=>colors.color === 'black');
// console.log(blacks)

// 3.4 find

const casio = products.find(a=>a.brand==='casio');
console.log(casio)