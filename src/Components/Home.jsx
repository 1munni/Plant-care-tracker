import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const plants=useLoaderData();
    console.log(plants);
    return (
        <div>
            
        </div>
    );
};

export default Home;