import { Module } from "@nestjs/common";
import { UserGetProfileController } from "../controllers/user.get.profile.controller";
import { UserGetProfileService } from "../services/user.profile.get.service";
import { UserGetProfileRepository } from "../repositories/user.get.profile.repository";

@Module({
    controllers: [UserGetProfileController],
    providers: [UserGetProfileService, UserGetProfileRepository]
})

export class UserGetProfileModule {}