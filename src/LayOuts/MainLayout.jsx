import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
     <Header></Header>
     <div className='max-w-7xl mx-auto'>
  <Outlet></Outlet>
  <Footer></Footer>
     </div>
          
        </div>
    );
};

export default MainLayout;