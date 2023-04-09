import React from 'react';

const LandingPages = ({ landingPage }) => {
    const { first, second, third, fourth, image } = landingPage;
    return (
        <div className='grid md:grid-cols-2 items-center'>

            <div className='md:mx-40 mx-12 mt-5'>
                <h1 className='text-5xl font-bold mb-3'>{first}</h1>
                <h1 className='text-5xl font-bold text-blue-400 mb-4'>{second}</h1>
                <h1 className='text-gray-500 mb-3'>{third}</h1>
                <button className='btn btn-primary'>{fourth}</button>
            </div>

            <img src={image} />
        </div>
    );
};

export default LandingPages;