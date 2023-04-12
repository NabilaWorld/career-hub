// import React, { useEffect, useState } from 'react';
// import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import JobItems from '../JobItem/JobItems';


const Job = () => {
   
    
    const {newArr} = useLoaderData()

    // console.log(products)
    return (
        <div>
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