import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='grid md:grid-cols-3 mt-5 '>
            <h1 className='md:ml-40 ml-40 mb-3 font-bold text-xl'>Study Plan</h1>
            <div className='flex gap-5 ml-12 mb-3 font-bold text-blue-500'>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/job'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
        </div>

        <button className='btn btn-primary w-28  ml-40 font-bold'>Apply Job</button>

        </div>
    );
};

export default Header;