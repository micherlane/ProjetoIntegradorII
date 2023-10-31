import { Controller, Get, HttpStatus, Injectable, Param, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserGetProfileService } from "../services/user.profile.get.service";
import { AuthGuard } from "../../auth/auth.guard";

@ApiTags("Usuario")
@Controller({
    path: "v1"
})

@Injectable()
export class UserGetProfileController {
    constructor(private readonly userGetProfileService: UserGetProfileService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("users/profile/:userId")

    async getProfile(@Res() res, @Param("userId") userId: string){

        const profile = await this.userGetProfileService.execute(userId);

        return res.status(HttpStatus.OK).json(profile);
    }
}