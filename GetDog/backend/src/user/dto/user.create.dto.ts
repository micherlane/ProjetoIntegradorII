import { ApiProperty } from "@nestjs/swagger";
import { TypeUser } from "@prisma/client";

export class UserCreateDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    typeUser: TypeUser
}
