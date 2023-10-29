import { ApiProperty } from "@nestjs/swagger";

export class UserUpdateProfileDto {
    @ApiProperty()
    gender: string;

    @ApiProperty()
    biography: string;      

    @ApiProperty()
    profilePicture: string;

    @ApiProperty()
    coverPhoto : string;
}