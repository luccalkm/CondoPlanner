import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authentication/login/Login";
import LoginLayout from "./components/layouts/LoginLayout";
import RegisterPage from "./pages/authentication/register/Register";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/home/Home";
import { Condominium } from "./pages/condominium/Condominium";
import ReservationPage from "./pages/reservation/Reservation";
import { ProtectedRoute } from "./components/layouts/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import CommomAreaPage from "./pages/commomArea/CommomArea";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="condominium" element={<Condominium />} />
                        <Route path="reservation" element={<ReservationPage />} />
                        <Route path="commom-area" element={<CommomAreaPage />} />
                    </Route>
                </Route>
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
