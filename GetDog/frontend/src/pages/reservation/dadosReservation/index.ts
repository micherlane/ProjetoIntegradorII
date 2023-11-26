import { ReservationModel } from "@/models/reservationModel";

const reservationJSON = [		{
    "id": "a0befc46-5fd3-4ca5-b727-11fad1ad47f8",
    "appointment": "2023-02-02T00:00:00.000Z",
    "statusDogWalkReservation": "AWAITING_CONFIRMATION",
    "address": "Joquéi Clube",
    "postId": "624738a9-b623-47b3-9cb0-dfd356ab6585",
    "createdAt": "2023-11-21T23:45:43.914Z",
    "updatedAt": "2023-11-21T23:45:43.914Z",
    "user": {
        "id": "1499b4a9-f891-48b0-8fe8-b54859e42419",
        "name": "Derek Walters",
        "address": "Joquéi Clube",
        "profile": {
            "gender": "famale",
            "biography": "Médica Legista de Zustyken City com hobbie de passear com cachorros",
            "profilePicture": "1701019720226.kevin.png",
            "coverPhoto": "1700611243810.ai_image_history_62827.png"
        }
    }
},
{
    "id": "c363767e-38e2-4596-88ef-25f61a016828",
    "appointment": "2023-02-02T00:00:00.000Z",
    "statusDogWalkReservation": "AWAITING_CONFIRMATION",
    "address": "Joquéi Clube",
    "postId": "ada6b2d7-6f32-4d85-8384-5f25f6cb5a3d",
    "createdAt": "2023-11-21T23:12:12.650Z",
    "updatedAt": "2023-11-21T23:12:12.650Z",
    "user": {
        "id": "1499b4a9-f891-48b0-8fe8-b54859e42419",
        "name": "Derek Walters",
        "address": "Joquéi Clube",
        "profile": {
            "gender": "famale",
            "biography": "Médica Legista de Zustyken City com hobbie de passear com cachorros",
            "profilePicture": "1701019720226.kevin.png",
            "coverPhoto": "1701019720226.kevin.png"
        }
    }
}]

export const reservations = reservationJSON.map(reservation => ReservationModel.fromJSON(reservation));