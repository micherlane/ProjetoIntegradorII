import { Injectable } from "@nestjs/common";
import prismaClient from "../../prisma";

@Injectable()
export class AuthUserRepository {
    public async verifyEmailAlready(email: string){
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        return userAlreadyExists;
    }
}