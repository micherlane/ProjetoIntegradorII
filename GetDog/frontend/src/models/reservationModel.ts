import { TYPE_USER } from "@/enums/type_user";
import { UserModel } from "./userModel";

class ProfileReservation{
    profilePicture: string

    constructor(profilePicture: string){
        this.profilePicture = profilePicture;
    }

    public static fromJSON(json: any): ProfileReservation{
        return new ProfileReservation(json.profilePicture);
    }
}

class AuthorReservation {
    name: string;
    typeUser: TYPE_USER;
    profile: ProfileReservation;
    
    constructor(name: string, typeUser: TYPE_USER, profile: ProfileReservation){
        this.name = name;
        this.typeUser = typeUser;
        this.profile = profile;
    }

    public static fromJSON(json: any): AuthorReservation {
        return new AuthorReservation(json.name, json.typeUser, ProfileReservation.fromJSON(json.profile));
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

