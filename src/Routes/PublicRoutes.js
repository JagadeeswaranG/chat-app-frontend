import { Outlet } from "react-router-dom"

const PublicRoutes = ({component: Component, ...rest}) => {
    return <div className="App">
        <Outlet/>
    </div>
}

export default PublicRoutes;