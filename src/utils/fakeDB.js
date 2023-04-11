// add data to local storage
const addToDb = id => {
    // localStorage.setItem('job-details', id)
    let shoppingCart = {}

    // get previous data from local storage
    const storedCart = localStorage.getItem('job-details')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    } 
    // add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('job-details', JSON.stringify(shoppingCart))
}

export {addToDb}


