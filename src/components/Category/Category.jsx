import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Category = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('category.JSON')
            .then(res => res.json())
            .then(data => setCarts(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <div className='text-center mt-32'>
            <h1 className='text-3xl font-bold mb-4 '>Job Category List</h1>
            <p className='text-gray-800 mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div>
                {
                    carts.map(cart => <Cart
                    key = {cart.id}
                    cart = {cart}
                    ></Cart> )
                }
            </div>
        </div>
    );
};

export default Category;
