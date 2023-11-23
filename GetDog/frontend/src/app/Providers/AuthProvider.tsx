"use client";

import { ReactNode, useState } from "react";
import { AuthContext, UserProps } from "../contexts/AuthContext";

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider ({ children} : AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
    
    async function signIn(){
        alert("Clicou no login!");
    }

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, signIn
        }}>
            { children }
        </AuthContext.Provider>
    );
}