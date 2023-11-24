"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
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
        localStorage.removeItem('@getdog.token');   
        Router.push('/')
    } catch (err) {
        console.log('Erro ao deslogar', err);
    }
}
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    function parseJwt(token) {
        if (token) {
            const tokenParts = token.split('.');

            if (tokenParts.length === 3) {
                const encodedPayload = tokenParts[1];
                const decodedPayload = atob(encodedPayload);

                try {
                    const parsedPayload = JSON.parse(decodedPayload);
                    return parsedPayload;
                } catch (error) {
                    console.error('Erro ao decodificar o payload do token:', error);
                    return null;
                }
            }
        }
        return null;
    }

    useEffect(() => {
        const token = localStorage.getItem('@getdog.token');
        if (token) {
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            const parsedToken = parseJwt(token);

            if (parsedToken) {
                //console.log('Token JWT decodificado:', parsedToken);
        
                const { sub } = parsedToken;


                api.get(`/users/profile/${sub}`).then(response => {
                    const { id, name, email, address, typeUser } = response.data['user'];
                    setUser({
                        id,
                        name, 
                        email, 
                        address,
                        typeUser
                    });
                }).catch(() => {
                    signOut();
                });

 
            } else {
                console.error('Erro ao decodificar o token JWT.');
            }

        }

    }, []);

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            });

            const { id, name, address, typeUser, token } = response.data;
            setCookie(undefined, '@getdog.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });

            localStorage.setItem('@getdog.token', token);

            setUser({
                id,
                name,
                email,
                typeUser,
                address
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            Router.push('/home')

        } catch (err) {
            console.log('Erro ao acessar', err);
        }
    }

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated, signIn, signOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}