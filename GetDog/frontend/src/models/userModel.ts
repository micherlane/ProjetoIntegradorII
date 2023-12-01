import { ProfileModel } from "./profileModel";

export class UserModel {
    id: string;
    name: string;
    address: string;
    typeUser: string;
    profile: ProfileModel | undefined;

    constructor(id: string, name: string, address: string, typeUser: string, profile: ProfileModel | undefined){
        this.id = id;
        this.name = name;
        this.address = address;
        this.profile = profile;
        this.typeUser = typeUser
    }

    public static fromJSON(json: any): UserModel {
        return new UserModel(
            json.id,
            json.name,
            json.address,
            json.typeUser,
            json.profile !== undefined ? ProfileModel.fromJSON(json.profile): undefined,
        );
    }
}