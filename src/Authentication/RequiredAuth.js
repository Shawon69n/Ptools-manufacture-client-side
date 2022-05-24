import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {
    let location = useLocation();
    const user = false;
    // const [user, loading, error] = useAuthState(auth);

    // if(loading){
    //     return <Loading></Loading>
    // }
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAuth;