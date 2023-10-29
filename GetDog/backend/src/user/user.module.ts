import { Module } from '@nestjs/common';
import { UserCreateModule } from './modules/user.create.module';
import { UserUpdateProfileModule } from './modules/user.update.profile.module';
import { UserGetProfileModule } from './modules/user.get.profile.module';

@Module({
  imports: [ UserCreateModule, UserUpdateProfileModule, UserGetProfileModule],
  controllers: [],
  providers: [],
})
export class UserModule {}
