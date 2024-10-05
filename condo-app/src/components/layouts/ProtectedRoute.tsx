import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"

export const ProtectedRoute = () => {
    const auth = useAuth();

    if (!auth?.token) {
        debugger;
        return <Navigate to={"/login"} replace />
    }

    return <Outlet />
}