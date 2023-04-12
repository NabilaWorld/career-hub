// import React, { useEffect, useState } from 'react';
// import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import JobItems from '../JobItem/JobItems';


const Job = () => {
   
    
    const {newArr} = useLoaderData()

    // console.log(products)
    return (
        <div>
            <div className='my-10'>
            <h1 className='text-center  font-bold text-2xl bg-pink-100 p-10 mx-10 rounded-xl'>Job Details</h1>
            </div>
            <ul>
                {
                    newArr.map(product=> <JobItems
                        key = {product.id}
                        product={product}
                    ></JobItems> )
                }
            </ul>
        </div>
    );
};

export default Job;