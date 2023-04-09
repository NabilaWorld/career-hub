import React from 'react';

const FeatureShow = ({feature}) => {
    const {image, first_text, second_text, button_one, button_two, img_1, text_1, img_2, text_2, button} = feature;
    return (
        <div className='mt-5 border rounded-lg p-10 mr-5'>
            <img className='h-20 w-20 mb-4' src={image}/>
            <h1 className='mb-4 font-bold'>{first_text}</h1>
            <p className='mb-4'>{second_text}</p>
            <button className='border px-3 mr-5 mb-4 text-blue-400'>{button_one}</button>
            <button className='border px-3 mb-4 text-blue-400'>{button_two}</button>

            <div className='flex'>
                <div className='flex mr-5 mb-4'>
                    <img className='h-5 w-5' src={img_1}></img>
                    <h1>{text_1}</h1>
                </div>

                <div className='flex'>
                    <img className='h-5 w-5' src={img_2}></img>
                    <h1>{text_2}</h1>
                </div>
            </div>

            <button className='btn btn-secondary'>{button}</button>

            

        </div>
    );
};

export default FeatureShow;