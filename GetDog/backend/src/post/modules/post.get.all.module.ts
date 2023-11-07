import { Module } from "@nestjs/common";
import { PostGetAllController } from "../controllers/post.get.all.controller";
import { PostGetAllService } from "../services/post.get.all.service";
import { PostGetAllRepository } from "../repositories/post.get.all.repository";

@Module({
    controllers: [PostGetAllController],
    providers: [PostGetAllService, PostGetAllRepository]
})

export class PostGetAllModule {}
