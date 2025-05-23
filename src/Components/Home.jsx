import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';
import Banner from './Banner';
import ConsumerReview from './ConsumerReview';
import ReviewCard from './ReviewCard';
import Gellary from './Gellary';
import NewPlants from './NewPlants';

const Home = () => {
  
    return (
        <div className='  bg-base-200 flex justify-center items-center flex-col ' data-theme="light">
      <Banner></Banner>
      
      <NewPlants></NewPlants>
      <Gellary></Gellary>

<div className='py-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 '>
    <ConsumerReview></ConsumerReview>
    <ReviewCard></ReviewCard>
</div>
        </div>
    );
};

export default Home;