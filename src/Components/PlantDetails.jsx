import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaLeaf, FaTint, FaUser, FaHeartbeat, FaCalendarAlt } from 'react-icons/fa';

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

  if (!plant) return <div className="text-center text-lg mt-10">Loading plant info...</div>;

  return (
    <section className="max-w-5xl mx-auto mt-12 px-6 py-10 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-2xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green-900">{plant.name}</h1>
          <p className="text-md text-gray-700 italic">{plant.Description}</p>

          <ul className="text-md space-y-2 mt-4">
            <li><FaLeaf className="inline text-green-600 mr-2" /><strong>Category:</strong> {plant.category}</li>
            <li><FaTint className="inline text-blue-600 mr-2" /><strong>Watering:</strong> {plant.wateringFrequency}</li>
            <li><FaHeartbeat className="inline text-red-500 mr-2" /><strong>Health:</strong> {plant.healthStatus}</li>
            <li><strong>Care Level:</strong> {plant.careLevel}</li>
            <li><FaCalendarAlt className="inline text-yellow-500 mr-2" /><strong>Last Watered:</strong> {plant.lastWateredDate}</li>
            <li><FaCalendarAlt className="inline text-blue-500 mr-2" /><strong>Next Watering:</strong> {plant.nextWateringDate}</li>
            <li><FaUser className="inline text-purple-500 mr-2" /><strong>Added By:</strong> {plant.userName || 'Unknown'} ({plant.userEmail || 'N/A'})</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlantDetails;
