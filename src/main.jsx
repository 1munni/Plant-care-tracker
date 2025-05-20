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


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
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
        path:"myPlants",
        Component:MyPlants
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
