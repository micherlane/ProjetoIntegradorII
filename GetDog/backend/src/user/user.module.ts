import { Module } from '@nestjs/common';
import { UserCreateModule } from './modules/user.create.module';

@Module({
  imports: [ UserCreateModule, ],
  controllers: [],
  providers: [],
})
export class UserModule {}
