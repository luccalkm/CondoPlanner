import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import LoginLayout from "./components/layout/LoginLayout";
import RegisterPage from "./pages/register/Register";

function App() {
    return (
        <>
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
