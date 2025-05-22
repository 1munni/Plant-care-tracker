import React, { useEffect, useState } from 'react';
import PlantsCard from './PlantsCard';

const NewPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch all plants and display the latest six
    fetch('https://plan-care-tracker-server.vercel.app/plants')
      .then(res => res.json())
      .then(data => {
        // Take the most recently added six plants
        const latestSix = data.slice(-6).reverse();
        setPlants(latestSix);
      })
      .catch(err => console.error('Failed to fetch plants:', err));
  }, []);

  return (
    <section className="my-12 px-4">
      <h2 className="text-3xl font-bold mb-6">New Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plants.map(plant => (
          <PlantsCard
            key={plant._id}
            plant={plant}
            plants={plants}
            setPlants={setPlants}
            showActions={false}
          />
        ))}
      </div>
    </section>
  );
};

export default NewPlants;
