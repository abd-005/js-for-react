

const handleAddToLocalStorage = () => {
    
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const data = {id,name}
    localStorage.setItem(id,JSON.stringify(data));
    
}

const storedItem = localStorage.getItem('123123')
console.log(JSON.parse(storedItem))

const handleClear = () => {
    localStorage.clear();
}
