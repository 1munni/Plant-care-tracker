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
import MyPlants from './Components/MyPlants.jsx';
import AllPlants from './Components/AllPlants.jsx';
import PlantDetails from './Components/PlantDetails.jsx';
import UpdatePlant from './Components/UpdatePlant.jsx';
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Components/Users.jsx';
import PrivateRoute from './Context/PrivateRoute.jsx';
import AddPlants from './Components/AddPlants.jsx';
import Loading from './Components/Loading.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        // loader:()=>fetch('https://plan-care-tracker-server.vercel.app/plants'),
        Component:Home,
       
      },

      {
        path:"allPlants",
          loader:()=>fetch('https://plan-care-tracker-server.vercel.app/plants'),
        Component:AllPlants,
         hydrateFallbackElement:<Loading></Loading>
      },
      // {
      //   path:"addPlants",
      //   element:<PrivateRoute><AddPlants></AddPlants></PrivateRoute>
      // },
      {
        path:"addPlants",
        element:<AddPlants></AddPlants>
      },
   
      {
        path:"plant/:id",
        Component:PlantDetails
      },

      {
  path: "/myPlants",
  element: <MyPlants />,
  loader: () => fetch("https://plan-care-tracker-server.vercel.app/plants").then(r=>r.json())
},
      {
        path:"updatePlants/:id",
        loader:({params})=> fetch(`https://plan-care-tracker-server.vercel.app/plants/${params.id}`),
        Component:UpdatePlant,
        hydrateFallbackElement:<Loading></Loading>
      }]},
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
        loader:()=>fetch('https://plan-care-tracker-server.vercel.app/users'),
        Component:Users
      },


    ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
