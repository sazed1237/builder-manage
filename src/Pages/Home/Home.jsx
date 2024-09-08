import React from 'react';
import Hero from '../Hero';
import ThreeSteps from '../ThreeSteps';
import Projects from '../Projects';
import About from '../About';
import Newsletter from '../Newsletter';

const Home = () => {
    return (
        <div>
            <Hero />
            <ThreeSteps />
            <Projects />
            <About />
            <Newsletter />
        </div>
    );
};

export default Home;