import { Module } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";
import { UserCreateService } from "../services/user.create.service";
import { UserCreateController } from "../controllers/user.create.controller";

@Module({
    controllers: [UserCreateController],
    providers: [UserCreateService, UserCreateRepository]
})

export class UserCreateModule {}