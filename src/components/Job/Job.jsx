import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';

const Job = () => {
    const {job, setJob} = useState([]);

    useEffect(()=>{
        fetch('jobDetails.json')
        .then(res=> res.json())
        .then(data=> console.log(data))
    }, [])

    let cart = [];
    const savedCart = getStoredCart();
    
    return (
        <div>
            
        </div>
    );
};

export default Job;