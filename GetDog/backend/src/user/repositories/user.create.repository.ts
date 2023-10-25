import prismaClient from "../../prisma";
import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/user.create.dto";
import { User } from "@prisma/client";

@Injectable()
export class UserCreateRepository {
    public async verifyUserAlreadyExists(email: string): Promise<User>{
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        return userAlreadyExists;
    }

    public async save(userCreateDto: UserCreateDto){            
        
        const user = await prismaClient.user.create({
            data: {
                    name: userCreateDto.name,
                    email: userCreateDto.email,
                    password: userCreateDto.password,
                    address: userCreateDto.address,
                    typeUser: userCreateDto.typeUser
            },
            select: {
                id: true,
                name: true,
                address: true,
                typeUser: true
            }
        })
        return user;
    }
}