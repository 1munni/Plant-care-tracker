import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {
    const { image, name, category, healthStatus,Description, _id,lastWateredDate,nextWateringDate,userEmail,userName,careLevel,wateringFrequency }=useLoaderData();
const handleUpdatePlant=e=>{
    e.preventDefault();
    const form=e.target;
    const formData=new FormData (form);
    const updatedPlant=Object.fromEntries(formData.entries())
    console.log(updatedPlant);

    // send updated plants to the database
    fetch(`https://plan-care-tracker-server.vercel.app/plants/${_id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPlant)
})
.then(res => res.json())
.then(data => {
if(data.modifiedCount){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "plants updated has been saved",
  showConfirmButton: false,
  timer: 1500
});
}
})


}

    return (
                  <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-4xl font-medium'>Update Plants</h1>
            <p>Let's change as you desire!</p>
            </div>
            <form onSubmit={handleUpdatePlant}>
<div className='grid grid-cols-1  gap-6'>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Image</label>
  <input type="text" name="image" defaultValue={image} className="input w-full" placeholder="Plant Image URL" />
</fieldset>
 {/* name */}
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Name</label>
  <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Plant name" />
 </fieldset>


<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Category</label>
  <select name="category" defaultValue={category} className="select select-bordered w-full">
    <option value="" disabled selected>Select Category</option>
    <option value="succulent">Succulent</option>
    <option value="fern">Fern</option>
    <option value="flowering">Flowering</option>
    {/* Add more categories as needed */}
  </select>
</fieldset>

{/* description */}

    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Description</label>
  <input type="text" name="Description" defaultValue={Description} className="input w-full" placeholder="Plant Description" />
 </fieldset>
 {/* care-level */}
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Care Level</label>
  <select name="careLevel" defaultValue={careLevel} className="select select-bordered w-full">
    <option value="" disabled selected>Select Care Level</option>
    <option value="easy">Easy</option>
    <option value="moderate">Moderate</option>
    <option value="difficult">Difficult</option>
  </select>
</fieldset>

{/* watering frequency */}

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Watering Frequency</label>
  <select name="wateringFrequency" defaultValue={wateringFrequency} className="select select-bordered w-full">
    <option value="" disabled selected>Select Watering Frequency</option>
    <option value="daily">Daily</option>
    <option value="every-2-days">Every 2 Days</option>
    <option value="every-3-days">Every 3 Days</option>
    <option value="weekly">Weekly</option>
    <option value="bi-weekly">Bi-Weekly</option>
    <option value="monthly">Monthly</option>
    <option value="as-needed">As Needed</option>
  </select>
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Last Watered Date</label>
  <input type="date" name="lastWateredDate" defaultValue={lastWateredDate} className="input w-full" />
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Next Watering Date</label>
  <input type="date" name="nextWateringDate" defaultValue={nextWateringDate} className="input w-full" />
</fieldset>
{/* healthstatus */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Health Status</label>
  <select name="healthStatus" defaultValue={healthStatus} className="select select-bordered w-full">
    <option value="" disabled selected>Select Health Status</option>
    <option value="healthy">Healthy</option>
    <option value="wilting">Wilting</option>
    <option value="needs-nutrients">Needs Nutrients</option>
    <option value="pest-infestation">Pest Infestation</option>
    <option value="disease">Disease</option>
  </select>
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">User Email</label>
  <input type="email" name="userEmail" defaultValue={userEmail} className="input w-full" placeholder="user@example.com" />
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">User Name</label>
  <input type="text" name="userName" defaultValue={userName} className="input w-full" placeholder="John Doe" />
</fieldset>
<input type="submit" className='btn w-full' value="Update Plant" />
</div>


            </form>
            
</div>
    );
};

export default UpdatePlant;