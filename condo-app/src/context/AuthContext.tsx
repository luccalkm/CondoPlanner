import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token')
        }
    }, [token])

    const login = (newToken: string | null) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null)
    }
    
    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}