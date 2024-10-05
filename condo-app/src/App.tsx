import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import LoginLayout from "./layouts/LoginLayout";
import RegisterPage from "./pages/register/Register";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
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
