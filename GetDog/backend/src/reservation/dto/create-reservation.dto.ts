import { ApiProperty } from "@nestjs/swagger";

export class ReservationCreateDto {
    @ApiProperty()
    appointment: Date;
    @ApiProperty()
    address: string;
    @ApiProperty()
    postId: string;
    @ApiProperty()
    userId: string;
}
