export class AuthError extends Error {
    constructor(){
        super("Usuário ou senha incorretos");
        this.name = "Auth Login Error";
    }
}