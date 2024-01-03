import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
    const {loggedIn}=useSelector((state)=>state.auth)
    return(
        loggedIn ? <Outlet/> : <Navigate to=""/>
        
    )
}

export default PrivateRoutes