import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "./components/authSlice";
function Protected({children}) {
    const user=useSelector(selectLoggedInUser)
    
        if(!user)
            return <Navigate to='/login'></Navigate>
         return children
    
    
}

export default Protected;