import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LandingPages from '../LandingPages/LandingPages';
import Category from '../Category/Category';

const Home = () => {
    const landingPages = useLoaderData();
    return (
        <div>
            {
                landingPages.map(landingPage => <LandingPages
                key = {landingPage.id}
                landingPage = {landingPage}
                ></LandingPages> )
            }

            <Category></Category>
        </div>
    );
};

export default Home;