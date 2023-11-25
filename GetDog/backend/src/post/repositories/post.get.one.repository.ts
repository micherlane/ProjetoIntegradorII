import prismaClient from "src/prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import { postGetAllDto } from "../dto/post.get.all.dto";

@Injectable()

export class PostGetOneRepository {
    private logger = new Logger ('PostGetOneRepository');

    public async getOnePost(id: string){
        try{
            const post = await prismaClient.post.findFirst({
                where: {
                    id: id
                },
                select: {
                    ...postGetAllDto
                }
            });

            return post;
        } catch (error){
            this.logger.error(`Erro ao buscar a informação da publicação: ${error.message}`);
            throw new ExceptionError("Erro interno do servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}