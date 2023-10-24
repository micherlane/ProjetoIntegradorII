import { Injectable } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";

@Injectable()
export class UserCreateService {
    constructor(private userCreateRepository: UserCreateRepository){}

    public async execute(){
        return await this.userCreateRepository.save();
    }
}