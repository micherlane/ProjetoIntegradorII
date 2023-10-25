import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthUserService } from '../service/auth.service';
import { AuthDto } from '../dto/auth.login.dto';
import { AuthError } from '../err/auth.error';

@Controller({
    path: "v1"
})
export class AuthUserController {
    constructor(private readonly authService: AuthUserService){}

    @Post("/session")
    async signIn(@Res() res, @Body() authLoginDto: AuthDto){
        const auth = await this.authService.execute(authLoginDto);

        if(auth instanceof AuthError){
            return res.status(HttpStatus.UNAUTHORIZED).json({
                error: auth.name,
                message: auth.message
            })
        }

        return res.status(HttpStatus.OK).json(auth);
    }
    
}
