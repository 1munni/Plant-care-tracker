import React from 'react';
import Swal from 'sweetalert2';

const AddPlants = () => {

    const handleAddPlant=e=>{
      e.preventDefault();
      const form=e.target;
      const formData=new FormData(form);
      const newPlant = Object.fromEntries(formData.entries());
      console.log(newPlant);

// send plant data to server
fetch('https://plan-care-tracker-server.vercel.app/plants', {
    method:'POST',
  headers: {
    'Content-Type': 'application/json'
},
    body:JSON.stringify(newPlant)
})
.then(res=>res.json())
.then(data=>{
    // console.log('after adding plants to db', data)
    if(data.insertedId){
        console.log(' plant added successfully')
       Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
// form.reset()
    }
})

    }
    return (
               <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-4xl font-medium'>Add Plants</h1>
            <p>We want to empower you to keep your plants alive! Our at-a-glance printable plant care guides make it easy to remember what each plant needs.</p>
            </div>
            <form onSubmit={handleAddPlant}>
<div className='grid grid-cols-1  gap-6'>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Image</label>
  <input type="text" name="image" className="input w-full" placeholder="Plant Image URL" />
</fieldset>
 {/* name */}
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Name</label>
  <input type="text" name="name" className="input w-full" placeholder="Plant name" />
 </fieldset>


<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Category</label>
  <select name="category" className="select select-bordered w-full">
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
  <input type="text" name="Description" className="input w-full" placeholder="Plant Description" />
 </fieldset>
 {/* care-level */}
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Care Level</label>
  <select name="careLevel" className="select select-bordered w-full">
    <option value="" disabled selected>Select Care Level</option>
    <option value="easy">Easy</option>
    <option value="moderate">Moderate</option>
    <option value="difficult">Difficult</option>
  </select>
</fieldset>

{/* watering frequency */}

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Watering Frequency</label>
  <select name="wateringFrequency" className="select select-bordered w-full">
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
  <input type="date" name="lastWateredDate" className="input w-full" />
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Next Watering Date</label>
  <input type="date" name="nextWateringDate" className="input w-full" />
</fieldset>
{/* healthstatus */}
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">Health Status</label>
  <select name="healthStatus" className="select select-bordered w-full">
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
  <input type="email" name="userEmail" className="input w-full" placeholder="user@example.com" />
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
  <label className="label">User Name</label>
  <input type="text" name="userName" className="input w-full" placeholder="John Doe" />
</fieldset>
<input type="submit" className='btn w-full' value="Add Plant" />
</div>


            </form>
            
</div>
    );
};

export default AddPlants;