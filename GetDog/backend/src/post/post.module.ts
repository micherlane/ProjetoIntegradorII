import { Module } from '@nestjs/common';
import { PostCreateModule } from './modules/post.create.module';
import { PostGetAllModule } from './modules/post.get.all.module';
import { PostGetOneModule } from './modules/post.get.one.module';


@Module({
  imports: [ PostCreateModule, PostGetAllModule, PostGetOneModule ],
  controllers: [],
  providers: [],
})
export class PostModule {}
