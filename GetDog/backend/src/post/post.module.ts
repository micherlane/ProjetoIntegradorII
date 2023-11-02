import { Module } from '@nestjs/common';
import { PostCreateModule } from './modules/post.create.module';


@Module({
  imports: [ PostCreateModule ],
  controllers: [],
  providers: [],
})
export class PostModule {}
