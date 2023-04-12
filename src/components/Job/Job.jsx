// import React, { useEffect, useState } from 'react';
// import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import JobItems from '../JobItem/JobItems';


const Job = () => {


    const { newArr } = useLoaderData()

    // console.log(products)
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center  font-bold text-2xl bg-pink-100 p-10 mx-10 rounded-xl'>Jobs Details</h1>

            </div>

            <div className='mb-5 text-center'>
                <button className='btn btn-secondary mr-5'>Remote</button>
                <button className='btn btn-secondary mr-5'>Full Time</button>
            </div>


            <ul>
                {
                    newArr.map(product => <JobItems
                        key={product.id}
                        product={product}
                    ></JobItems>)
                }
            </ul>
        </div>
    );
};

export default Job;