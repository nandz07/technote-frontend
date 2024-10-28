import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const { roles } = useAuth();
    console.log(roles )
    console.log('allowed = '+ allowedRoles )

    let content;
    if (roles.some(role => allowedRoles.includes(role))) {
        content = <Outlet />;
        console.log('outlet')
    } else {
        content = <Navigate to="/login" state={{ from: location }} replace />;
        console.log('login')
    }

    return content;
};

export default RequireAuth;
