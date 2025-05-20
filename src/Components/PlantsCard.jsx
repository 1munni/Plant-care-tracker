import React from "react";
import { Link, Links } from "react-router";
import Swal from "sweetalert2";

const PlantsCard = ({ plant,plants, setPlants }) => {
  const { image, name, category, healthStatus, _id } = plant;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //start deleteing the plant
        fetch(`http://localhost:3000/plants/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
// remove the plants from the state
 const remainingPlants= plants.filter(plant=>plant._id!=_id)
 setPlants(remainingPlants);

            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-base-100">
      <figure>
        <img className="w-[300px] h-[320px]" src={image} />
      </figure>
      <div className="flex w-full justify-around item-center mt-20 ">
        <div className="py-3">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="font-bold">Category: {category}</p>
          <p>HealthStatus: {healthStatus}</p>
        </div>
        <div className="card-actions justify-center">
          <div className="join join-vertical space-y-2">
          <Link to={`/plant/${_id}`}>
            <button className="btn join-item">View</button>
          </Link>
            <Link to={`/updatePlants/${_id}`}>
            <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsCard;
