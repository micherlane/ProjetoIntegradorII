import { Module } from '@nestjs/common';
import { AuthUserController } from './controller/auth.controller';
import { AuthUserService } from './service/auth.service';
import { AuthUserRepository } from './repositories/auth.login.repository';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '30d'}
  })],
  controllers: [AuthUserController],
  providers: [AuthUserService, AuthUserRepository]
})
export class AuthModule {}
