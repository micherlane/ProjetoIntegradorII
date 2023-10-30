import { HttpStatus, Injectable } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";
import { UserCreateDto } from "../dto/user.create.dto";
import { BCryptProvider } from "../../providers/EncriptionPassword/bcripty.provider";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";

@Injectable()
export class UserCreateService {

    constructor(private userCreateRepository: UserCreateRepository, private bcryptProvider: BCryptProvider){}

    public async execute(userCreateDto: UserCreateDto){

        const userAlreadyExists = await this.userCreateRepository.verifyUserAlreadyExists(userCreateDto.email);

        if (userAlreadyExists) {
            throw new ExceptionError('Usuário já cadastrado.', HttpStatus.UNPROCESSABLE_ENTITY);
        }

        const passwordHash = await this.bcryptProvider.encryptPassword(userCreateDto.password);

        userCreateDto.password = passwordHash;

        return await this.userCreateRepository.save(userCreateDto);
    }
}