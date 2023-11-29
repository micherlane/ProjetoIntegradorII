import { ReservationModel } from "./reservationModel";

export class TourModel {
    id: string;
    status: string;
    dogWalkReservation: ReservationModel;

    constructor(id: string, status: string, dogWalkReservation: ReservationModel){
        this.id = id;
        this.status = status;
        this.dogWalkReservation = dogWalkReservation
    }

    public static fromJSON(json: any): TourModel {
        return new TourModel(
            json.id,
            json.status,
            ReservationModel.fromJSON(json.dogWalkReservation)
        );
    }
}