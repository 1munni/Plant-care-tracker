import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PlantsCard from './PlantsCard';
import { useLoaderData } from 'react-router';
import Loading from './Loading';

const MyPlants = () => {
  const allPlants = useLoaderData();            
  const { user, loading } = useContext(AuthContext);

  // 1) still waiting on auth?
  if (loading) {
    return <Loading></Loading>;
  }

  // 2) require login
  if (!user) {
    return (
      <div className="text-center mt-10 text-red-600">
        You must be logged in to view your plants.
      </div>
    );
  }

  // 3) filter by the logged-in user’s email
  const myPlants = Array.isArray(allPlants)
    ? allPlants.filter((p) => p.userEmail === user.email)
    : [];

  // 4) empty state
  if (myPlants.length === 0) {
    return (
      <div className="text-center mt-10">
        You haven’t added any plants yet.
      </div>
    );
  }

  // 5) render grid
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        My Plants ({myPlants.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {myPlants.map((plant) => (
          <PlantsCard
            key={plant._id}
            plant={plant}
            plants={myPlants}
            showActions={true} 
            setPlants={() => {
           
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPlants;