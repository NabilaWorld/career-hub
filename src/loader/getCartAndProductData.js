import { getStoredCart } from "../utils/fakeDB";




// setCart(newArr)

export const productsAndCartData = async()=>{

    const productData = await fetch('/feature.JSON');
    const products = await productData.json()
    const savedCart = getStoredCart();

    let newArr = [];
    for(const id in savedCart){
        const foundFroduct = (products.find(product=> product.id === parseInt(id) ))
        
        if(foundFroduct){
            newArr.push(foundFroduct)
            // setCart([...carts, foundFroduct])
        }
        }
        return {newArr, products};
}

export {}