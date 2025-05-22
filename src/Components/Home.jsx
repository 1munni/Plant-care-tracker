import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';
import Banner from './Banner';

const Home = () => {
  
    // const initialPlants=useLoaderData();
    // const [plants, setPlants] = useState(initialPlants?.data || []);
    // // const[plants, setPlants]=useState(initialPlants);
    // console.log(initialPlants);
    // // const [plants, setPlants] = useState(Array.isArray(initialPlants) ? initialPlants : []);

    return (
        <div className='  bg-base-200 '>
      <Banner></Banner>

  
        </div>
    );
};

export default Home;