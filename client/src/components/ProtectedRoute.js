import { useContext } from "react"
import { AuthContext } from "../contexts/authContextProvider"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user) return <Navigate to='/login' />
    return children;
}

export default ProtectedRoute