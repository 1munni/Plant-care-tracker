
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Context/AuthContext';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { use, useState } from 'react';
import Swal from 'sweetalert2';


const Register = () => {

const {createUser, setUser,updateUser, googleSignIn }=use(AuthContext)
console.log(createUser)
const navigate = useNavigate();
const [nameError, setNameError]=useState('');
const [showPassword, setShowPassword]=useState(false);

    const handleRegister=(e)=>{
      
        e.preventDefault();
        // console.log(e.target);
        const form=e.target;
        const formData=new FormData(form);

        const {email,password, ...restFormData}= Object.fromEntries(formData.entries());



//         const name=form.name.value;
//         if(name.length<5){
//           // setNameError("name should be more then 5 character");
//           toast.error("Name must be at least 5 characters");
// return
//         };
//         const photo=form.photo.value;
//         const email=form.email.value;
//         const password=form.password.value;
     
      createUser(email,password)
      .then(result=>{
console.log(result.user);

const userProfile={
    email,
    ...restFormData,
    creationTime:result.user?.metadata?.creationTime,
    lastSignInTime:result.user?.metadata?.lastSignInTime


}
//  saveuser info in the database

fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
'content-type':'application/json'
    },
    body:JSON.stringify(userProfile)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your account is created ",
  showConfirmButton: false,
  timer: 1500
});
    }
    console.log('after profile save', data)
})



// navigate('/'); 

// updateUser({displayName:name, photoURL:photo})
// .then(()=>{
//   setUser({...user, displayName:name, photoURL:photo});
//   toast.success("Registration successful!");
// })
// .catch((error) => {
// // console.log(error)
// toast.error("User created, but profile update failed.");
// setUser(user);
// });


      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage)
        toast.error(`Registration failed: ${error.message}`);
      }); }

      const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result=>{
          // console.log(result.user)
          toast.success("Logged in with Google");
        })
        .catch(error=>{
          // console.log(error)
          toast.error("Google Sign-In failed");
        })
      }
    return (
        <div className=' flex justify-center item-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    {/* name */}
                  <label className="label">Name</label>
                  <input 
                  type="text"
                   className="input" 
                   placeholder="Name"
                    name='name'
                    required/>
                    {nameError && <p className='text-red-400 text-xs'>{nameError}</p>}
                  {/* (photo-url) */}
                  <label className="label">Photo Url</label>
                  <input 
                  type="text"
                   className="input"
                    placeholder="Photo Url" 
                    name='photo'
                    required/>
                  {/* (phone number) */}
                  <label className="label">Phone</label>
                  <input 
                  type="number"
                   className="input"
                    placeholder="Phone" 
                    name='phone'
                    required/>
                    {/* address */}
                  <label className="label">Address</label>
                  <input 
                  type="text"
                   className="input"
                    placeholder="Address" 
                    name='Address'
                    required/>
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
                 type='submit' className="btn bg-gray-800 btn-neutral mt-4">Register</button>

                      <button onClick={handleGoogleLogIn} className="btn btn-secondary btn-outline w-full">
                            <FcGoogle size={24} /> Login with Google
                          </button>
                  
                  
                  <p className='font-semibold text-center pt-5'>Already have an account?{''} <Link className='text-secondary' to='/auth/login'>LogIn</Link></p>
                </fieldset>
              </form>
            </div>
        </div>
    );
};

export default Register;