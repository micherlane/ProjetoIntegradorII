import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthUserRepository } from '../repositories/auth.login.repository';
import { AuthDto } from '../dto/auth.login.dto';
import { BCryptProvider } from 'src/providers/EncriptionPassword/bcripty.provider';
import { JwtService } from '@nestjs/jwt';
import { ExceptionError } from 'src/middlewares/exceptions/exception.error';

@Injectable()
export class AuthUserService {
    constructor(private readonly authUserRepository: AuthUserRepository, private bcryptProvider: BCryptProvider, private jwtService: JwtService){}

    public async execute(authDto: AuthDto){
        const { email, password } = authDto;
        const user =  await this.authUserRepository.verifyEmailAlready(email);

        if(!user){
            throw new ExceptionError("Usuário ou senha incorretos", HttpStatus.UNAUTHORIZED);
        }

        const passwordHash = await this.bcryptProvider.comparePassword(password, user.password);

        if(!passwordHash){
            throw new ExceptionError("Usuário ou senha incorretos", HttpStatus.UNAUTHORIZED);
        }
        
        const payload = { sub: user.id, name: user.name, email: user.email, typeUser: user.typeUser, address: user.address};

        const token = await this.jwtService.signAsync(payload);

        return { token };
    }   
}
