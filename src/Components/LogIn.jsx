import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const LogIn = () => {
    const {signInUser}=use(AuthContext);
    const [showPassword, setShowPassword]=useState(false);
    const [nameError, setNameError]=useState('');
     
    const location=useLocation();
  // console.log(location);
  const navigate=useNavigate();

    const handleLogIn=e=>{
        e.preventDefault()
          const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signInUser(email, password)
.then(result => {
  console.log (result.user);
   
  const signInInfo={
    email,
    lastSignInTime: result.user?.metadata?.lastSignInTime
   }

//   update last sign in to the data-base
fetch('http://localhost:3000/users',{
    method:'PATCH',
    headers:
    {
     'content-type':'application/JSON'   
    },
    body:JSON.stringify(signInInfo)
})
.then(res=>res.json())
.then(data=>{
    console.log('after update patch',data)
})

 
  navigate(`${location.state? location.state:'/'}`)
})
.catch((error) => {
  const errorCode = error.code;
  toast.error(`Login failed: ${errorCode}`);
  setError(errorCode);
})

    }
    return (
               <div className=' flex justify-center item-center'>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                   <h2 className='font-semibold text-2xl text-center'>Log In Your Account</h2>
                     <form onSubmit={handleLogIn} className="card-body">
                       <fieldset className="fieldset">
                            {/* email */}
                  <label className="label">Email</label>
                  <input type="email"
                   className="input" 
                   placeholder="Email" 
                   name='email'
                   required />
                         <div className='relative'>
                            {/* password */}
                         <label className="label">Password</label>
                         <input 
                         type={showPassword ? 'text' :'password'}
                         className="input" 
                         placeholder="Password"
                          name='password'
                          minlength="6" 
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                          title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" 
                          required />
                          <button onClick={()=>{setShowPassword(!showPassword)}}
                          className='btn btn-xs absolute top-6 right-6'>
                           
                          {
                           showPassword? <FaEyeSlash></FaEyeSlash>:
                           <FaEye/>
                          }
                           
                           </button>
                 
                         </div>
                        
                         <button
                        type='submit' className="btn bg-gray-800 btn-neutral mt-4">Log in</button>
       
                             {/* <button onClick={handleGoogleLogIn} className="btn btn-secondary btn-outline w-full">
                                   <FcGoogle size={24} /> Login with Google
                                 </button> */}
                         
                         
                         <p className='font-semibold text-center pt-5'>Already have an account?{''} <Link className='text-secondary' to='/auth/login'>LogIn</Link></p>
                       </fieldset>
                     </form>
                   </div>
               </div>
    );
};

export default LogIn;