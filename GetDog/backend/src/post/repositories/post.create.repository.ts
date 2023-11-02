import prismaClient from "../../prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { PostCreateDto } from "../dto/post.create.dto";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";

@Injectable()

export class PostCreateRepository {
    private logger = new Logger('PostCreateRepository'); 
    
    public async save(postCreateDto: PostCreateDto, postImage: string[]){
        try{
            const post = await prismaClient.post.create({
                data: {
                   ...postCreateDto,
                   photos: postImage
                }
            });
            
            return post;

        } catch (error){
            this.logger.error(`Erro ao criar um post: ${error.message}`)
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}