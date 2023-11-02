import { Injectable } from "@nestjs/common";
import { PostCreateRepository } from "../repositories/post.create.repository";
import { PostCreateDto } from "../dto/post.create.dto";

@Injectable()
export class PostCreateService {
    constructor(private readonly postCreateRepository: PostCreateRepository){}

    public async execute(postCreateDto: PostCreateDto, postImages: Express.Multer.File[]){
        const postPhotos = postImages.map(file => file.filename);
        
        const disponibility = (postCreateDto.disponibility).map(stringData => new Date(stringData));
        
        const postCreate = {...postCreateDto, disponibility};


        return await this.postCreateRepository.save(postCreate, postPhotos);
    }
}