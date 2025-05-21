import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
    const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {


 
 const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const signInUser=(email,password)=>{
    // setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleSignIn=()=>{
    // setLoading(true);
    return signInWithPopup(auth, googleProvider)
   }


 const userInfo={
   createUser,
   googleSignIn,
   signInUser
 }
    
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;