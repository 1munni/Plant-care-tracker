import React, { use } from 'react';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
     const{user, loading}=use(AuthContext)
    // console.log(user);
    const location=useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
    

};

export default PrivateRoute;