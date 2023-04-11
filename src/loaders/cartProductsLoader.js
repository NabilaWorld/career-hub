// const cartProductsLoader = async (id)=> {
//     const loaderProducts = await fetch('jobDetails.JSON');
//     const product = await loaderProducts.json();
//     // console.log(product);
//     console.log(id)
//     return product;

    
// }

// export default cartProductsLoader;


const cartProductsLoader = async (id) => {
    const loaderProducts = await fetch('/jobDetails.json');
    const products = await loaderProducts.json();

    
    const product = products.find((p) => p.id === parseInt(id));
    
    // console.log(typeof id)
    // console.log(products)
    console.log(product)
    
    return product;
  };
  
  export default cartProductsLoader;
  