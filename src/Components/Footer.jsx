import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
<div className='bg-base-200'>
<footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-3 gap-1">
            <div className='flex'>
            <div>
    <p className='text-[#74b72e] font-bold text-2xl'>Planti</p>
</div>
            </div>

  <div className='gap-2 grid grid-flow-col list-none'>
  <li><NavLink className={({isActive})=> isActive? 'text-indigo-500':''} to='/'>Home</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? 'text-indigo-500':''} to='/allPlants'> All Plants</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? 'text-indigo-500':''} to='/addPlants'> Add Plants</NavLink> </li>
      <li><NavLink className={({isActive})=> isActive? 'text-indigo-500':''} to='/myPlants'>My Plants</NavLink> </li>
  </div>
  <hr className="border-t-2 border-dashed border-gray-800 my-2" />
  
    <div className="flex gap-5 text-2xl">

    <a
            href="https://www.facebook.com/YourPageName"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/YourChannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <FaInstagram />
          </a>
    </div>
      </footer>
</div>
    );
};

export default Footer;