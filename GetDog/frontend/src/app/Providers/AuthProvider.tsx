"use client";

import { ReactNode, useState } from "react";
import { AuthContext, SignInProps, UserProps } from "../contexts/AuthContext";

import { destroyCookie, setCookie, parseCookies } from 'nookies';

import Router from 'next/router';

import { api } from "../services/apiClient";

type AuthProviderProps = {
    children: ReactNode;
}


export function signOut() {
    try {
        destroyCookie(undefined, '@getdog.token');
    } catch (err){
        console.log('Erro ao deslogar', err);
    }
}
export function AuthProvider ({ children} : AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
    
    async function signIn({email, password}: SignInProps){
        try {
            const response = await api.post('/session', {
                email,
                password
            });

            const { id, name, address, typeUser, token} = response.data;
            setCookie(undefined, '@getdog.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });

            setUser({
                id, 
                name,
                email,
                typeUser,
                address
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;


        } catch (err){
            console.log('Erro ao acessar', err);
        }
    }

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, signIn, signOut
        }}>
            { children }
        </AuthContext.Provider>
    );
}