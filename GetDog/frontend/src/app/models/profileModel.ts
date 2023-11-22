export class ProfileModel {
    id: string | undefined;
    gender: string;
    biography: string;
    profilePicture: string;
    coverPhoto: string;

    constructor(
        id: string | undefined,
        gender: string,
        biography: string,
        profilePicture: string,
        coverPhoto: string
    ){
        this.id = id;
        this.gender = gender;
        this.biography = biography;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto
    }

    public static fromJSON(json:any): ProfileModel {
        return new ProfileModel(
            json.id,
            json.gender,
            json.biography,
            json.profilePicture,
            json.coverPhoto
        );
    }
}