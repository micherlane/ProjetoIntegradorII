import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BCriptyProviderModule } from './providers/EncriptionPassword/module/bcripty.provider.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { ErroHttpFilter } from './middlewares/exceptions/exceptions';

@Module({
  imports: [UserModule, AuthModule, BCriptyProviderModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: ErroHttpFilter,
  },],
})
export class AppModule {}
