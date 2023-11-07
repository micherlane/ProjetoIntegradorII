import prismaClient from "../../prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";

@Injectable()

export class PostGetAllRepository {
    private logger = new Logger('PostGetAllRepository');

    public async getAllPosts(perPage: number, offset: number){
        try {
            const posts = await prismaClient.post.findMany({
                take: perPage,
                skip: offset
            });

            return posts;
        } catch (error){
            this.logger.error(`Erro ao buscar todas as publicações: ${error.message}`)
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}