import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    // Fetch plant data by ID
    fetch(`https://plan-care-tracker-server.vercel.app/plants/${id}`)
      .then(response => response.json())
      .then(data => setPlant(data))
      .catch(error => console.error('Error fetching plant:', error));
  }, [id]);

  if (!plant) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <img
        src={plant.image}
        alt={plant.name}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h2 style={{ marginTop: '1rem', fontSize: '1.5rem' }}>{plant.name}</h2>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{plant.Description}</p>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        <li><strong>Category:</strong> {plant.category}</li>
        <li><strong>Watering Frequency:</strong> {plant.wateringFrequency}</li>
        <li><strong>Health Status:</strong> {plant.healthStatus}</li>
        <li><strong>Care Level:</strong> {plant.careLevel}</li>
        <li><strong>Last Watered:</strong> {plant.lastWateredDate}</li>
        <li><strong>Next Watering:</strong> {plant.nextWateringDate}</li>
        <li><strong>Added By:</strong> {plant.userName || 'Unknown'}</li>
      </ul>
    </div>
  );
}

export default PlantDetails;
