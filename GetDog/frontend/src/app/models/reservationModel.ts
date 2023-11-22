import { UserModel } from "./userModel";

export class ReservationModel {

    id: string;
    appointment: string;
    statusDogWalkReservation: string;
    address: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    user: UserModel;

    constructor(
        id: string, 
        appointment: string, 
        statusDogWalkReservation: string, 
        address: string, 
        postId: string,
        createdAt: string, 
        updatedAt: string,
        user: UserModel){
            this.id = id;
            this.appointment = appointment;
            this.statusDogWalkReservation = statusDogWalkReservation;
            this.address = address;
            this.postId = postId;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
            this.user = user;
        }
    
    public static fromJSON(json: any): ReservationModel {
        return new ReservationModel(
            json.id,
            json.appointment,
            json.statusDogWalkReservation,
            json.address,
            json.postId,
            json.createdAt,
            json.updatedAt,
            UserModel.fromJSON(json.user)
        );
    }
}

