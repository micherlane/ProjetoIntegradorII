"use client";

import { ReactNode, useState } from "react";
import { AuthContext, SignInProps, UserProps } from "../contexts/AuthContext";

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider ({ children} : AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
    
    async function signIn({email, password}: SignInProps){
        console.log(email, password);
    }

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, signIn
        }}>
            { children }
        </AuthContext.Provider>
    );
}