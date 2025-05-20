import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';

const Home = () => {
    const initialPlants=useLoaderData();
    const[plants, setPlants]=useState(initialPlants);
    console.log(initialPlants);
    return (
        <div className='  bg-base-200 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6  py-10 max-w-11/12 mx-auto' >
                {
                    plants && 
                    plants?.map(plant=> <PlantsCard 
                       key={plant._id}
                       plant={plant}
                         plants={plants}
                         setPlants={setPlants}>
                      

                        </PlantsCard>)
                }
            </div>
        </div>
    );
};

export default Home;