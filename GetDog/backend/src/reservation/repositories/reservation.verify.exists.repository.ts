import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
export class ReservationVerifyExistsRepository {
    public async verifyExistsReservation(userId: string, postId: string){
        const reservation = await prismaClient.dogWalkReservation.findFirst({
            where: {
                AND: {
                    userId: userId,
                    postId: postId
                }
            }
        });

        return reservation;
    }
}