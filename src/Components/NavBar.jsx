import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";



const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast('Sign-out successful.'))
      .catch(console.error);
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          to='/allPlants'
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          to='/addPlants'
        >
          Add Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          to='/myPlants'
        >
          My Plants
        </NavLink>
      </li>
    </>
  );

  return (
    // <div className='bg-base-300'>
    //   <div className='navbar mx-auto p-2 max-w-6xl drop-shadow-2xl'>
    //     {/* Mobile menu */}
    //     <div className='navbar-start'>
    //       <div className='dropdown'>
    //         <button
    //           tabIndex={0}
    //           className='btn btn-ghost lg:hidden'
    //           type='button'
    //         >
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='h-5 w-5'
    //             fill='none'
    //             viewBox='0 0 24 24'
    //             stroke='currentColor'
    //           >
    //             <path
    //               strokeLinecap='round'
    //               strokeLinejoin='round'
    //               strokeWidth='2'
    //               d='M4 6h16M4 12h8m-8 6h16'
    //             />
    //           </svg>
    //         </button>
    //         <ul
    //           tabIndex={0}
    //           className='menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52'
    //         >
    //           {links}
    //         </ul>
    //       </div>
    //       <Link to='/' className='ml-2 text-[#74b72e] font-bold text-2xl'>
    //         Planti
    //       </Link>
    //     </div>

    //     {/* Desktop menu */}
    //     <div className='navbar-center hidden lg:flex'>
    //       <ul className='menu menu-horizontal px-1'>{links}</ul>
    //     </div>

    //     {/* User info & auth buttons */}
    //     <div className='navbar-end flex items-center space-x-3'>
    //       {user ? (
    //         <>
    //           {/* User avatar with tooltip showing email on hover */}
    //           {user.photo && (
    //             <div
    //               className='tooltip tooltip-bottom'
    //               data-tip={user.email}
    //             >
    //               <img
    //                 src={user.photo}
    //                 alt='User Avatar'
    //                 className='w-10 h-10 rounded-full object-cover border-2 border-[#74b72e]'
    //               />
    //             </div>
    //           )}

    //           {/* Logout button */}
    //           <button
    //             onClick={handleLogOut}
    //             className='btn bg-[#74b72e] rounded-xl px-4 text-white'
    //           >
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link to='/login' className='btn bg-[#74b72e] text-white'>
    //             Login
    //           </Link>
    //           <Link to='/register' className='btn btn-outline'>
    //             Register
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
         <div  className='bg-base-300 '>
       
      <div className="navbar mx-auto p-2 max-w-6xl drop-shadow-2xl  ">
      <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           {
            links
           }
            </ul>
          </div>
          <p><span className='text-[#74b72e] font-bold text-2xl'>Planti</span></p>
  

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
      {
        links
      }
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        <div className='font-bold shadow'>{user && user.email}</div>
<img
  className='w-12 h-12 rounded-full'
  src={user ? user.photo : <FaUserCircle />}
  alt="User avatar"
  title={user ? user.name || "No Name" : "Guest"} 
/>


            
            {user ?
            (<button onClick={handleLogOut} className='className="btn rounded-2xl bg-[#74b72e] p-2 font-medium"'>LogOut</button>):
(<Link to='/auth/login' className="btn rounded-2xl bg-[#74b72e] py-2 font-medium">LogIn</Link>)          }
          
        </div>
      </div>
      </div>
  );
};

export default NavBar;
