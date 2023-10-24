import prismaClient from "../../prisma";
import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/user.create.dto";
import { UserAlreadyExistsError } from "../err/user.alreadyExists.error";

@Injectable()
export class UserCreateRepository {
    public async save(userCreateDto: UserCreateDto){
       

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: userCreateDto.email
            }
        });

        if (userAlreadyExists) {
           return new UserAlreadyExistsError();
        }

        
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