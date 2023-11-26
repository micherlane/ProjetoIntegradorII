import prismaClient from "../../prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";
import { postGetAllDto } from "../dto/post.get.all.dto";

@Injectable()

export class PostGetAllRepository {
    private logger = new Logger('PostGetAllRepository');

    public async getAllPosts(perPage: number, offset: number){
        try {
            const posts = await prismaClient.post.findMany({
                select: {
                    ...postGetAllDto,
                },
                take: perPage,
                skip: offset,
                orderBy: {
                    createdAt: 'desc' 
                }
            });

            return posts;
        } catch (error){
            this.logger.error(`Erro ao buscar todas as publicações: ${error.message}`)
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}