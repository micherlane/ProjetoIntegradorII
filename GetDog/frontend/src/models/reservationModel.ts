import { UserModel } from "./userModel";

class AuthorReservation {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }

    public static fromJSON(json: any): AuthorReservation {
        return new AuthorReservation(json.name);
    }
}
class PostReservation {
    title: string;
    legend: string;
    author: AuthorReservation; 

    constructor(title: string, legend: string, author: AuthorReservation){
        this.title = title;
        this.legend = legend;
        this.author = author;
    }
    public static fromJSON(json: any): PostReservation{
        return new PostReservation(json.title, json.legend, json.author);
    }
}
export class ReservationModel {

    id: string;
    appointment: string;
    statusDogWalkReservation: string;
    address: string;
    postId: string;
    createdAt: string;
    updatedAt: string;
    user: UserModel;
    post: PostReservation;

    constructor(
        id: string, 
        appointment: string, 
        statusDogWalkReservation: string, 
        address: string, 
        postId: string,
        createdAt: string, 
        updatedAt: string,
        user: UserModel, post: PostReservation){
            this.id = id;
            this.appointment = appointment;
            this.statusDogWalkReservation = statusDogWalkReservation;
            this.address = address;
            this.postId = postId;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
            this.user = user;
            this.post = post;
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
            UserModel.fromJSON(json.user),
            PostReservation.fromJSON(json.post)
        );
    }
}

