import {Navigate ,  Outlet} from "react-router-dom";


//Protected Routes with React Router v6
function PrivateRoutes(){
    let auth = JSON.parse(localStorage.getItem('currentUser'))

    
    return(
        auth? auth.accessToken? <Outlet/> : <Navigate to="/login" /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes