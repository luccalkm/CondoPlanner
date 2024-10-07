import { createContext, useContext, useEffect, useState } from "react";
import { LoginResponseDto } from "../apiClient";

interface AuthContextType {
    token: string | null;
    username: string | null;
    email: string | null;
    login: (loginRes: LoginResponseDto) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    username: null,
    email: null,
    login: () => { },
    logout: () => { },
});

export const useAuth = (): AuthContextType => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState<LoginResponseDto | null>(() => {
        const storedAuth = localStorage.getItem('loginRes');
        return storedAuth ? JSON.parse(storedAuth) : null;
    });

    useEffect(() => {
        if (authState?.token) {
            localStorage.setItem('loginRes', JSON.stringify(authState));
        } else {
            localStorage.removeItem('loginRes');
        }
    }, [authState]);

    const login = (loginRes: LoginResponseDto) => {
        if (loginRes && loginRes.token) {
            setAuthState(loginRes);
        }
    };

    const logout = () => {
        setAuthState(null);
        localStorage.removeItem('loginRes');
    }

    return (
        <AuthContext.Provider
            value={{
                token: authState?.token || null,
                username: authState?.username || null,
                email: authState?.email || null,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
