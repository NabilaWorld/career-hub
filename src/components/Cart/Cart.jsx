import React from 'react';

const Cart = ({cart}) => {
    const {image, text, salary} = cart;
    return (
        <div className='p-10 mr-6 mb-3 md:mr-10 bg-gray-200 rounded-lg'>
            <img className='h-16 w-16 mb-5 ' src={image}/>
            <h1 className='font-bold'>{text}</h1>
            <h1 className='text-gray-500'>{salary}</h1>
        </div> 
    );
};

export default Cart;