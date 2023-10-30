import { TypeUser } from "@prisma/client";
import { prismaMock } from "singleton";
import { UserCreateDto } from "src/user/dto/user.create.dto";
import { UserCreateRepository } from "src/user/repositories/user.create.repository";

test('shoudl create new user', async () => {
    const userCreateRepository = new UserCreateRepository();
    const user = {
        name    : "Rich" ,
        email   : "rich@email.com" ,
        password: "123" ,
        address : "Rua 100" ,
        typeUser: TypeUser.DOG_OWNER
    }

    const createUser = await prismaMock.user.create({
        data: {
            ...user
        }
    });

    await expect(userCreateRepository.save(user as UserCreateDto)).resolves.toEqual({
        name    : "Rich" ,
        email   : "rich@email.com" ,
        password: "123" ,
        address : "Rua 100" ,
        typeUser: TypeUser.DOG_OWNER
    });

    expect(createUser).toEqual(user);
})