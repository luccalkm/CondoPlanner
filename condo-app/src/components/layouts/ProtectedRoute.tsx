import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"

export const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn()) {
        return <Navigate to={"/login"} replace />
    }

    return <Outlet />
}