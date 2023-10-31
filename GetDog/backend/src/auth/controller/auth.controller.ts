import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthUserService } from '../service/auth.service';
import { AuthDto } from '../dto/auth.login.dto';
import { ApiTags } from '@nestjs/swagger';
import { ExceptionError } from 'src/middlewares/exceptions/exception.error';

@ApiTags("Usuario")
@Controller({
    path: "v1"
})
export class AuthUserController {
    constructor(private readonly authService: AuthUserService){}

    @Post("/session")
    async signIn(@Res() res, @Body() authLoginDto: AuthDto){
        if(!authLoginDto.password || !authLoginDto.password){
            throw new ExceptionError("Forneça o email/senha", HttpStatus.BAD_REQUEST);
        }
        const auth = await this.authService.execute(authLoginDto);

        return res.status(HttpStatus.OK).json(auth);
    }
    
}
