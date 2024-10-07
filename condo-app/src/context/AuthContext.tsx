
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { LoginResponseDto } from "../apiClient";
interface AuthContextType {
    loginResponse: LoginResponseDto | undefined;
    login: (loginRes: LoginResponseDto) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    getLoggedId: () => string | null;
}
const AuthContext = createContext<AuthContextType>({
    loginResponse: undefined,
    isLoggedIn: () => { return false },
    login: () => { },
    logout: () => { },
    getLoggedId: () => { return null}
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
    
    const [userId, setUserId] = useState<string | null>(() => {
        return localStorage.getItem('sessionId');
    });

    const [loginResponse, setLoginResponse] = useState<LoginResponseDto | undefined>(() => {
        if (token && userId) {
            return {
                token,
                userId,
                username: '', 
                email: ''     
            };
        }
        return undefined;
    });

    useEffect(() => {
        if (token && userId) {
            localStorage.setItem('token', token);
            localStorage.setItem('sessionId', userId);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('sessionId');
        }
    }, [token, userId]);

    
    const isLoggedIn = (): boolean => {
        return token != null;
    }

    const login = (loginRes: LoginResponseDto) => {
        if (loginRes && loginRes.token && loginRes.userId) {
            setToken(loginRes.token);
            setUserId(loginRes.userId);
            setLoginResponse(loginRes);
        }
    };

    
    const logout = () => {
        setLoginResponse(undefined);
        setToken(null);
        setUserId(null);
    }

    
    const getLoggedId = (): string | null => {
        return userId;
    }

    return (
        <AuthContext.Provider
            value={{
                getLoggedId,
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

