import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import LoginLayout from "./layouts/LoginLayout";
import RegisterPage from "./pages/register/Register";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/Home";
import CondominiumPage from "./pages/condominium/Condominium";

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/condominium" element={<CondominiumPage />} />
                </Route>
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
