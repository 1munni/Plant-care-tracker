import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`https://plan-care-tracker-server.vercel.app/plants/${id}`)
      .then(res => res.json())
      .then(data => {
        setPlant(data);
      });
  }, [id]);

  if (!plant) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-lg rounded-lg mt-10">
      <img src={plant.image} alt={plant.name} className="w-full h-96 object-cover rounded-lg" />
      <h2 className="text-3xl font-bold mt-4">{plant.name}</h2>
      <p className="mt-2 text-lg"><strong>Category:</strong> {plant.category}</p>
      <p><strong>Description:</strong> {plant.Description}</p>
      <p><strong>Care Level:</strong> {plant.careLevel}</p>
      <p><strong>Watering:</strong> {plant.wateringFrequency}</p>
      <p><strong>Health Status:</strong> {plant.healthStatus}</p>
      <p><strong>Last Watered:</strong> {plant.lastWateredDate}</p>
      <p><strong>Next Watering:</strong> {plant.nextWateringDate}</p>
      <p><strong>Added By:</strong> {plant.userName} ({plant.userEmail})</p>
    </div>
  );
};

export default PlantDetails;
