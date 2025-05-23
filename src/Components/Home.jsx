import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';
import Banner from './Banner';
import ConsumerReview from './ConsumerReview';
import ReviewCard from './ReviewCard';
import Gellary from './Gellary';
import NewPlants from './NewPlants';

const Home = () => {
  
    // const initialPlants=useLoaderData();
    // const [plants, setPlants] = useState(initialPlants?.data || []);
    // // const[plants, setPlants]=useState(initialPlants);
    // console.log(initialPlants);
    // // const [plants, setPlants] = useState(Array.isArray(initialPlants) ? initialPlants : []);

    return (
        <div className='  bg-base-200 flex justify-center items-center flex-col ' data-theme="light">
      <Banner></Banner>
      
      <NewPlants></NewPlants>
      <Gellary></Gellary>

<div className='py-10 flex gap-5 '>
    <ConsumerReview></ConsumerReview>
    <ReviewCard></ReviewCard>
</div>
        </div>
    );
};

export default Home;