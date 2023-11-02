import { Module } from "@nestjs/common";
import { PostCreateController } from "../controllers/post.create.controller";
import { PostCreateService } from "../services/post.create.service";
import { PostCreateRepository } from "../repositories/post.create.repository";

@Module({
    controllers: [PostCreateController],
    providers: [PostCreateService, PostCreateRepository]
})

export class PostCreateModule{}