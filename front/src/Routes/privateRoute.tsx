import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
    allowedRoles: string[];
    userRoles: string[];
}

const PrivateRoute = ({ allowedRoles, userRoles }: PrivateRouteProps) => {
    const hasRequiredRole = allowedRoles.some(role => userRoles.includes(role));

    return hasRequiredRole ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
