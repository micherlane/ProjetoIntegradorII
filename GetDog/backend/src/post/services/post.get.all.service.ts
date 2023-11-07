import { Injectable } from "@nestjs/common";
import { PostGetAllRepository } from "../repositories/post.get.all.repository";

@Injectable()
export class PostGetAllService {
    constructor(private readonly postGetAllRepository: PostGetAllRepository){}

    public async execute(perPage: number, offset: number){
        return await this.postGetAllRepository.getAllPosts(perPage, offset);
    }
}