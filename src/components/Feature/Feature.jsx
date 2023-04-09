import React, { useEffect, useState } from 'react';
import FeatureShow from '../FeatureShow/FeatureShow';

const Feature = () => {
    const [features, setFeatures] = useState([]);
    useEffect(()=>{
        fetch('feature.JSON')
        .then(res => res.json())
        .then(data=> setFeatures(data))
        .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <div className='text-center mt-28 mb-16'>
                <h1 className='font-bold text-3xl mb-4'>Featured Jobs</h1>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

                <div className='grid md:grid-cols-2 md:ml-36 ml-5'>
                    {
                        features.map(feature=> <FeatureShow
                        key = {feature.id}
                        feature = {feature}
                        ></FeatureShow> )
                    }
                    

    <center><button className='btn btn-secondary mt-5 ml-96 w-32 mb-10'>See All Jobs</button></center>
                </div>
        </div>
    );
};

export default Feature;