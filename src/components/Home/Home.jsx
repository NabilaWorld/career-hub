import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LandingPages from '../LandingPages/LandingPages';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';

const Home = () => {
    const landingPages = useLoaderData();
    // console.log(landingPages)
    return (
        <div>
            {
                 landingPages?.map(landingPage => <LandingPages
                    key = {landingPage.id}
                    landingPage = {landingPage}
                    ></LandingPages> )
            }

            <Category></Category>
            <Feature></Feature>
        </div>
    );
};

export default Home;