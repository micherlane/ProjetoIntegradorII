export class PostModel {
    id: string;
    title: string;
    legend: string;
    disponiblity: Date[];
    address: string;
    likes: number;
    unlikes: number;
    createdAt: Date;
    updatedAt: Date;
    photos: string[];
    authorId: string;

    constructor(
          id: string,
          title: string,
          legend: string, 
          disponibility: Date[], 
          address: string, 
          likes: number, 
          unlikes: number, 
          createdAt: Date,
          updatedAt: Date,
          photos: string[],
          authorId: string
          ) {
        this.id = id;
        this.title = title;
        this.legend = legend;
        this.disponiblity = disponibility;
        this.address = address;
        this.likes = likes;
        this.unlikes = unlikes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.photos = photos;
        this.authorId = authorId
    }

    public static fromJSON(json: any): PostModel {
        return new PostModel(
            json.id,
            json.title,
            json.legend,
            json.disponibility.map((dateString: string) => {
                return new Date(dateString)
            }),
            json.address,
            json.likes,
            json.unlikes,
            json.createdAt,
            json.updatedAt,
            json.photos,
            json.authorId,

        );
    }
}