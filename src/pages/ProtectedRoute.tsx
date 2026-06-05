import {Navigate, Outlet} from 'react-router'
const ProtectedRoute=()=>{
    const authenticated=true;
    if (!authenticated){

        return <Navigate to="/login"/>
    }
    return <Outlet />
}

export default ProtectedRoute