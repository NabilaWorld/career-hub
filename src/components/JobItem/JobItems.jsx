import React from 'react';

const JobItems = ({product}) => {
    const {image, first_text, second_text, button_one, button_two, img_1, text_1, img_2, text_2, button} = product;

    return (
        <div className='grid md:grid-cols-2 items-center border mx-10 mb-4 p-2 rounded-lg'>
            <div className='flex items-center gap-10 md:ml-40'>
                <img className='h-40 w-40' src={image} alt="" />
                <div>
                    <h1>{first_text}</h1>
                    <p>{second_text}</p>

                    <button className='mr-5 border px-2'>{button_one}</button>
                    <button className=' border px-2'>{button_two}</button>

                    <div className='flex items-center gap-2 '>
                        <img className='h-6 w-6' src={img_1} alt="" />
                        <p>{text_1}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={img_2} alt="" />
                        <p>{text_2}</p>
                    </div>

                </div>
            </div>

            <button className='btn btn-secondary w-32 md:ml-96'>{button}</button>
        </div>
    );
};

export default JobItems;