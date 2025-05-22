import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
    const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);


 
 const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
   }

   const logOut=()=>{
    return signOut(auth);
   }
   useEffect(()=>{
 const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
  // console.log(currentUser)
setUser(currentUser);
setLoading(false);
    });
    return()=>{
        unSubscribe();
    }
   },[])
   


 const userInfo={
   createUser,
   googleSignIn,
   signInUser,
   logOut,
   loading,
   user,
 }
    
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;