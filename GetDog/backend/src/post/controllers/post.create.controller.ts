import { Body, Controller, HttpStatus, Injectable, Post, Res, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PostCreateService } from "../services/post.create.service";
import { PostCreateDto } from "../dto/post.create.dto";
import { AuthGuard } from "../../auth/auth.guard";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { storage } from "../../../config/multer/multer.config";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";

@ApiTags("Postagem")
@Controller({
    path: "v1"
})

@Injectable()
export class PostCreateController {
    constructor(private readonly postCreateService: PostCreateService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post("posts")
    @UseInterceptors(
        FileFieldsInterceptor([{name: 'files'}], { storage: storage})
    )
    async createPost(@Res() res, @Body() postCreateDto: PostCreateDto, @UploadedFiles() files: Express.Multer.File[]){

        if(!postCreateDto.title || !postCreateDto.legend || !postCreateDto.disponibility || !postCreateDto.address || !postCreateDto.authorId){
            throw new ExceptionError("Por favor, forneça todos os campos obrigatórios.", HttpStatus.UNPROCESSABLE_ENTITY);

        }
        const postImages = files['files'] as Express.Multer.File[];

        const post = await this.postCreateService.execute(postCreateDto, postImages);

        return res.json(post);
    }
}