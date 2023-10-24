import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BCriptyProviderModule } from './providers/EncriptionPassword/module/bcripty.provider.module';

@Module({
  imports: [UserModule, BCriptyProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
