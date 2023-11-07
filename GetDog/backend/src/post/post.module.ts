import { Module } from '@nestjs/common';
import { PostCreateModule } from './modules/post.create.module';
import { PostGetAllModule } from './modules/post.get.all.module';


@Module({
  imports: [ PostCreateModule, PostGetAllModule ],
  controllers: [],
  providers: [],
})
export class PostModule {}
