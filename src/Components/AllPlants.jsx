import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';

const AllPlants = () => {
    const initialPlants=useLoaderData();
        const [plants, setPlants] = useState(initialPlants?.data || []);
        // const[plants, setPlants]=useState(initialPlants);
        console.log(initialPlants);
        // const [plants, setPlants] = useState(Array.isArray(initialPlants) ? initialPlants : []);
    return (
        <div className='pt-20 lg:pt-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6  py-10 max-w-11/12 mx-auto' >
                {
                    initialPlants && 
                    initialPlants?.map(plant=> <PlantsCard 
                       key={plant._id}
                       plant={plant}
                         plants={plants}
                         setPlants={setPlants}>
                            showActions={false} 
                      

                        </PlantsCard>)
                }
               
            </div>  
        </div>
    );
};

export default AllPlants;