import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LandingPages from '../LandingPages/LandingPages';

const Home = () => {
    const landingPages = useLoaderData();
    // console.log(landingPages)
    return (
        <div>
            {
                landingPages.map(landingPage => <LandingPages
                key = {landingPage.id}
                landingPage = {landingPage}
                ></LandingPages> )
            }
        </div>
    );
};

export default Home;