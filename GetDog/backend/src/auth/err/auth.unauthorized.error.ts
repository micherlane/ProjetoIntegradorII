export class AuthUnauthorizedError extends Error {
    constructor(){
        super("Acesso não autorizado.");
        this.name = "Auth Unauthorized Error";
    }
}