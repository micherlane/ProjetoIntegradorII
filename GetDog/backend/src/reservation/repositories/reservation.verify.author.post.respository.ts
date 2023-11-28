import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
export class ReservationAuthorPostRepository {
    public async getAuthorPost(postId: string){
        const author = await prismaClient.post.findFirst({
            where: {
                id: postId
            },
            select: {
                author: {
                    select: {
                        id: true
                    }
                }
            }
        });

        return author === null ? '' : author['author'].id;
    }
}