import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogIn = () => {
  const emailRef=useRef();
    const {signInUser,googleSignIn}=use(AuthContext);
    const [showPassword, setShowPassword]=useState(false);
   
    const location=useLocation();
  // console.log(location);
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || '/';

    const handleLogIn=e=>{
        e.preventDefault()
          const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signInUser(email, password)
.then(result => {
  console.log (result.user);
  // navigate(`${location.state? location.state:'/'}`)
  navigate(from, { replace: true });
   
  const signInInfo={
    email,
    lastSignInTime: result.user?.metadata?.lastSignInTime
   }

//   update last sign in to the data-base
fetch('https://plan-care-tracker-server.vercel.app/users',{
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

  
})
.catch((error) => {
  const errorCode = error.code;
  toast.error(`Login failed: ${errorCode}`);

})
    }

    const handleGoogleLogIn=()=>{
    googleSignIn()
    .then(result=>{
      // console.log(result.user)
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    })
    .catch(error=>{
      // console.log(error)
      toast.error("Google Sign-In failed");
    })
  }
    return (
               <div className=' flex justify-center item-center py-10'>
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
                    ref={emailRef}
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
       
                              {/* google login */}
                  
                  <button onClick={handleGoogleLogIn} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>


                        <p className='font-semibold text-center pt-5'>Don't have an account? <Link className='text-secondary' to='/register'>Register</Link></p>
                       </fieldset>
                     </form>
                   </div>
               </div>
    );
};

export default LogIn;