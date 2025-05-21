import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './LayOuts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddPlants from './Components/AddPlants.jsx';
import MyPlants from './Components/MyPlants.jsx';
import AllPlants from './Components/AllPlants.jsx';
import PlantDetails from './Components/PlantDetails.jsx';
import UpdatePlant from './Components/UpdatePlant.jsx';
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/plants'),
        Component:Home
      },
      {
        path:"allPlants",
        Component:AllPlants
      },
      {
        path:"addPlants",
        Component:AddPlants
      },
      {
        path:"plant/:id",
        Component:PlantDetails
      },

      {
        path:"myPlants",
        Component:MyPlants
      },
      {
        path:"updatePlants/:id",
        loader:({params})=> fetch(`http://localhost:3000/plants/${params.id}`),
        Component:UpdatePlant
      },
      {
        path:'login',
        Component:LogIn
      },
      
      {
        path:'register',
        Component:Register
      },
      {
        path:'users',
        loader:()=>fetch('http://localhost:3000/users'),
        Component:Users
      },


    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
