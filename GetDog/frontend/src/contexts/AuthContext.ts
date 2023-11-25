import { createContext } from "react";

export type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

export type UserProps = {
    id: string;
    name: string;
    email: string;
    address: string;
    typeUser: string;
}

export type SignInProps = {
    email: string;
    password: string;
}

export type SignUpProps = {
    name: string;
    email: string;
    password: string;
    address: string;
    typeUser: string;
}

export const AuthContext = createContext({} as AuthContextData);