import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";

const PrivateRoutes = ({children, ...rest}) => {
    const {user} = useContext(UserContext);
    if(!user){
        // setTimeout(()=>{
        //     console.log('Thanks for waiting...');
        // },3000);
        return <div>Loading...</div>        
    }
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;