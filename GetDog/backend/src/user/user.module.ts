import { Module } from '@nestjs/common';
import { UserCreateModule } from './modules/user.create.module';
import { UserUpdateProfileModule } from './modules/user.update.profile.module';

@Module({
  imports: [ UserCreateModule, UserUpdateProfileModule],
  controllers: [],
  providers: [],
})
export class UserModule {}
