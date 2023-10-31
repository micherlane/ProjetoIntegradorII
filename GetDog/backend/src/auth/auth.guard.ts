import { CanActivate, ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { ExceptionError } from "../middlewares/exceptions/exception.error";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if(!token){
            throw new ExceptionError("Acesso não autorizado.", HttpStatus.UNAUTHORIZED);
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );
            request['user'] = payload;
        } catch (error){
            throw new ExceptionError("Acesso não autorizado.", HttpStatus.UNAUTHORIZED);
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        if(!request.headers['authorization']){
            throw new ExceptionError("Acesso não autorizado.", HttpStatus.UNAUTHORIZED)
        }
        const [type, token] = request.headers['authorization'].split(' ') ?? [];;
        return type === 'Bearer' ? token : undefined;
    }
}