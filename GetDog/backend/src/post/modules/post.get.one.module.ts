import { Module } from "@nestjs/common";
import { PostGetOneController } from "../controllers/post.get.one.controller";
import { PostGetOneService } from "../services/post.get.one.service";
import { PostGetOneRepository } from "../repositories/post.get.one.repository";

@Module({
    controllers: [PostGetOneController],
    providers: [PostGetOneService, PostGetOneRepository]
})

export class PostGetOneModule {}