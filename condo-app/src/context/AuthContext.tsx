
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { LoginResponseDto } from "../apiClient";
interface AuthContextType {
    loginResponse: LoginResponseDto | undefined;
    login: (loginRes: LoginResponseDto) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}
const AuthContext = createContext<AuthContextType>({
    loginResponse: undefined,
    isLoggedIn: () => { return false },
    login: () => { },
    logout: () => { },
});
export const useAuth = (): AuthContextType => {
    return useContext(AuthContext);
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem('token');
    });

    const [loginResponse, setLoginResponse] = useState<LoginResponseDto>();

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const isLoggedIn = (): boolean => {
        const token = localStorage.getItem('token');
        return token != null;
    }

    const login = (loginRes: LoginResponseDto) => {
        if (loginRes && loginRes.token) {
            setToken(loginRes.token);
            setLoginResponse({
                ...loginRes
            })
        }
    };

    const logout = () => {
        setLoginResponse(undefined)
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                loginResponse,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
