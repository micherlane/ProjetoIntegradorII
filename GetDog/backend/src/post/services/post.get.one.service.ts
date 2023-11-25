import { Injectable } from "@nestjs/common";
import { PostGetOneRepository } from "../repositories/post.get.one.repository";

@Injectable()
export class PostGetOneService {
    constructor(private readonly postGetOneRepository: PostGetOneRepository){}

    public async execute(id: string){
        return await this.postGetOneRepository.getOnePost(id);
    }
}