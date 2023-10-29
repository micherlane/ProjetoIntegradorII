import { Module } from "@nestjs/common";
import { UserUpdateProfileController } from "../controllers/user.update.profile.controller";
import { UserUpdateProfileService } from "../services/user.update.profile.service";
import { UserUpdateProfileRepository } from "../repositories/user.update.profile.respository";

@Module({
    controllers: [UserUpdateProfileController],
    providers: [UserUpdateProfileService, UserUpdateProfileRepository]
})

export class UserUpdateProfileModule{}
