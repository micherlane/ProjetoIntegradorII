import { Body, Controller, HttpStatus, Injectable, Put, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserUpdateProfileService } from "../services/user.update.profile.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserUpdateProfileDto } from "../dto/user.update.profile.dto";
import { AuthGuard } from "../../auth/auth.guard";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { storage } from "../../../config/multer/multer.config";

@ApiTags("Usuario")
@Controller({
    path: "v1"
})

@Injectable()
export class UserUpdateProfileController {
    constructor(private readonly userUpdateProfileServices: UserUpdateProfileService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Put("users/profile")
    @UseInterceptors(
        FileFieldsInterceptor([{name: 'pictureProfile', maxCount: 1},{name: 'coverPhoto', maxCount: 1}],{
            storage: storage
        })
      )
    async updateProfile(@Req() req, @Res() res, @Body() userUpdateProfileDto: UserUpdateProfileDto, @UploadedFiles() files: {pictureProfile?: Express.Multer.File[]; coverPhoto?: Express.Multer.File[] }){
        const userId = req['user'].sub;

        const profile = await this.userUpdateProfileServices.execute(userId, userUpdateProfileDto, files);

        return res.status(HttpStatus.OK).json(profile);
    }
}