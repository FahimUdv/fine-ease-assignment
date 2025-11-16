import React from 'react';
import Hero from '../Components/Hero';
import HeroBanner from '../Components/HeroBanner';
import Overview from '../Components/Overview';
import Tips from '../Components/Tips';
import WhyMatters from '../Components/WhyMatters';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HeroBanner></HeroBanner>
            <Overview></Overview>
            <Tips></Tips>
            <WhyMatters></WhyMatters>
        </div>
    );
};

export default Home;