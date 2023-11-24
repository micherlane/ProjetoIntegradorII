"use client";

import { ReactNode, useState } from "react";
import { AuthContext, SignInProps, UserProps } from "../contexts/AuthContext";

import { destroyCookie } from 'nookies';

import Router from 'next/router';

type AuthProviderProps = {
    children: ReactNode;
}

export function signOut() {
    try {
        destroyCookie(undefined, '@getdog.token');
        Router.push('/');
    } catch {
        console.log('Erro ao deslogar');
    }
}

export function AuthProvider ({ children} : AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
    
    async function signIn({email, password}: SignInProps){
        console.log(email, password);
    }

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, signIn, signOut
        }}>
            { children }
        </AuthContext.Provider>
    );
}