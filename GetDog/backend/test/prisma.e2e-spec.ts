import { TypeUser } from "@prisma/client";
import { prismaMock } from "../singleton";
import { UserCreateDto } from "src/user/dto/user.create.dto";
import { UserCreateRepository } from "../src/user/repositories/user.create.repository";

test('deve criar um novo usuário', async () => {
    const userCreateRepository = new UserCreateRepository();
    const user = {
        name    : "Rich" ,
        email   : "rich@email.com" ,
        password: "123" ,
        address : "Rua 100" ,
        typeUser: TypeUser.DOG_OWNER
    };

    prismaMock.user.create.mockResolvedValue({
        ...user,
        id: "713b6c4b-3918-4119-bddc-9c492f7ad697",
        created_at: null,
        updated_at: null,
        profileId: "713b6c4b-3918-4119-bddc-9c492f7ad698"
    });

    prismaMock.profile.create.mockResolvedValue({
        id: "713b6c4b-3918-4119-bddc-9c492f7ad698", 
        userId: "713b6c4b-3918-4119-bddc-9c492f7ad697",
        gender: null,       
        biography: null,     
        profilePicture: null,
        coverPhoto: null,
        created_at: null,
        updated_at: null
    })
    
    const createUser = await userCreateRepository.save(user as UserCreateDto);

    expect(createUser).toEqual({
        id: "713b6c4b-3918-4119-bddc-9c492f7ad697",
        profileId: "713b6c4b-3918-4119-bddc-9c492f7ad698",
        name    : user.name ,
        email   : user.email ,
        address : user.address ,
        typeUser: TypeUser.DOG_OWNER,
        created_at: null,
        updated_at: null, 
        password: user.password
    });
});
