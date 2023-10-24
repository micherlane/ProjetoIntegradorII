import prismaClient from "../../prisma";
import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/user.create.dto";
import { UserAlreadyExistsError } from "../err/user.alreadyExists.error";
import { PasswordEncryption } from "src/providers/EncriptionPassword/password.encription.interface";

@Injectable()
export class UserCreateRepository {
    public async save(userCreateDto: UserCreateDto, passwordEncryption: PasswordEncryption){
       

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: userCreateDto.email
            }
        });

        if (userAlreadyExists) {
           return new UserAlreadyExistsError();
        }

        const passwordHash = await passwordEncryption.encryptPassword(userCreateDto.password);
        
        const user = await prismaClient.user.create({
            data: {
                    name: userCreateDto.name,
                    email: userCreateDto.email,
                    password: passwordHash,
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