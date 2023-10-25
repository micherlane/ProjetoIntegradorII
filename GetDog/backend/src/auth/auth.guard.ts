import { CanActivate, ExecutionContext, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "@nestjs/common";
import { jwtConstants } from "./constants";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";

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
        } catch {
            throw new ExceptionError("Acesso não autorizado.", HttpStatus.UNAUTHORIZED);
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] =request.headers['authorization'].split(' ') ?? [];;
        return type === 'Bearer' ? token : undefined;
    }
}