import React from 'react';

const Cart = ({cart}) => {
    const {image, text, salary} = cart;
    return (
        <div>
            <img className='h-16 w-16' src={image}/>
            <h1>{text}</h1>
        </div>
    );
};

export default Cart;